import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import './styles/style.css';
import Nav from './components/Nav';
import Header from './components/Header';
import AboutCovid from './components/AboutCovid';
import Statistic from './components/Statistic';
import News from './components/News';
import SelfCheck from './components/SelfCheck';

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
          <Header currentDate={this.state.currentDate} currentStatus={this.state.currentStatus} />
        </Route>

        <Route path='/changmoSungCovid19/info/' >
          <main>
            <Route path='/changmoSungCovid19/info/aboutCovid19'>
              <AboutCovid />
            </Route>

            <Route path='/changmoSungCovid19/info/statistic'>
              <Statistic currentDate={this.state.currentDate} currentStatus={this.state.currentStatus} />
            </Route>

            <Route path='/changmoSungCovid19/info/news'>
              <News />
            </Route>

            <Route path='/changmoSungCovid19/info/selfcheck'>
              <SelfCheck />
            </Route>
          </main>
        </Route>
      </Router>
     );
  }
}
 
export default App;
