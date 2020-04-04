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
        currentStatus: res.data,
        currentDate,
      })
    })
  }

  render() { 
    return ( 
      <Router>
        <Nav />
        
        <Route path='/changmoSungCovid19/' exact >
          <Header 
            currentStatus={this.state.currentStatus}
            currentDate={this.state.currentDate} 
          />
        </Route>

        <Route path='/changmoSungCovid19/info/' >
          <Main 
            currentStatus={this.state.currentStatus}
            currentDate={this.state.currentDate} 
          />
        </Route>
      </Router>
     );
  }
}
 
export default App;
