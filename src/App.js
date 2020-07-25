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
    }).then(({ data: { Countries, Date, Global } }) => {
      // To filter only countries that have at least 1 infected person
      const affectedCountries = Countries.filter(({TotalConfirmed}) => TotalConfirmed > 0);

      // To sort in the order of the most vulnerable countries 
      const currentStatistics = affectedCountries.sort((a, b) => a.TotalConfirmed > b.TotalConfirmed ? - 1 : 1);

      const currentDate = Date.slice(0, 10);

      this.setState({
        currentStatus: Global,
        currentStatistics,
        currentDate
      })
    })
  }


  render() { 
    const {currentDate, currentStatus, currentStatistics} = this.state;

    return ( 
      <Router basename='/'>
        <Nav />
        
        <Route path='/' exact >
          <Header 
            currentDate={currentDate} 
            currentStatus={currentStatus}
          />
        </Route>

        <Route path='/info/' >
          <Main 
            currentDate={currentDate}
            currentStatus={currentStatus}
            currentStatistics={currentStatistics}
          />
        </Route>
      </Router>
     );
  }
}
 
export default App;
