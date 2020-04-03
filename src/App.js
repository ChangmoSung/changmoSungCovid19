import React, { Component } from 'react';
import {
  BrowserRouter as Router,
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
      currentStatus: {},
    }
  }

  componentDidMount() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const currentDate = `${year}-${month > 9 ? `${month + 1}` : `0${month + 1}`}-${date > 9 ? `${date}` : `0${date}`}`;

    axios({
      url: `https://corona.lmao.ninja/all`,
      method: "GET",
    }).then(res => {
      this.setState({
        currentDate,
        currentStatus: res.data
      })
    })
  }

  render() { 
    return ( 
      <Router>
        <Nav />
        
        <Route path='/changmoSungCovid19/' exact >
          <Header 
            currentDate={this.state.currentDate}
            currentStatus={this.state.currentStatus} 
          />
        </Route>

        <Route path='/changmoSungCovid19/info/' >
          <Main 
            currentDate={this.state.currentDate}
            currentStatus={this.state.currentStatus}
          />
        </Route>
      </Router>
     );
  }
}
 
export default App;
