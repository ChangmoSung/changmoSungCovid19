import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav';
import Header from './components/Header';
import Statistic from './components/Statistic';
import News from './components/News';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentStatus: {},
    }
  }

  componentDidMount() {
    axios({
      url: `https://corona.lmao.ninja/all`,
      method: "GET",
    }).then(res => {
      this.setState({
        currentStatus: res.data
      })
    })
  }

  render() { 
    return ( 
      <Router>
        <Nav />
        
        <Route path='/changmoSungCovid19/' exact >
          <Header currentStatus={this.state.currentStatus} />
        </Route>

        <Route path='/changmoSungCovid19/info/' >
          <main>
            <Route path='/changmoSungCovid19/info/statistic'>
              <Statistic currentStatus={this.state.currentStatus} />
            </Route>

            <Route path='/changmoSungCovid19/info/news'>
              <News />
            </Route>
          </main>
        </Route>
      </Router>
     );
  }
}
 
export default App;
