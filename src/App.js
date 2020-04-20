import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import './styles/style.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: '',
      currentStatistics: [],
      currentStatus: {},
    }
  }


  // To get the api data for current status here and pass them to main and header
  componentDidMount() {
    axios({
      url: 'https://api.covid19api.com/summary',
      method: "GET",
    }).then(res => {
      // To filter only countries that have at least 1 infected person
      const affectedCountries = res.data.Countries.filter(country => country.TotalConfirmed > 0);

      // To sort in the order of the most vulnerable countries 
      const seriousness = affectedCountries.sort((a, b) => a.TotalConfirmed > b.TotalConfirmed ? - 1 : 1);

      const currentDate = res.data.Date.slice(0, 10);

      this.setState({
        currentStatistics: seriousness,
        currentStatus: res.data.Global,
        currentDate
      })
    })
  }


  render() { 
    return ( 
      <Router basename='/'>
        <Nav />
        
        <Route path='/' exact >
          <Header 
            currentDate={this.state.currentDate} 
            currentStatus={this.state.currentStatus}
          />
        </Route>

        <Route path='/info/' >
          <Main 
            currentDate={this.state.currentDate}
            currentStatus={this.state.currentStatus}
            currentStatistics={this.state.currentStatistics}
          />
        </Route>
      </Router>
     );
  }
}
 
export default App;
