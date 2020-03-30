import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';

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
        <Route path='/changmoSungCovid19/' exact >
          <Header currentStatus={this.state.currentStatus} />
        </Route>

        <Route path='/changmoSungCovid19/info/' >
          <Main currentStatus={this.state.currentStatus} />
        </Route>
      </Router>
     );
  }
}
 
export default App;
