import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() { 
    return ( 
      <Router>
        <Route path='/' exact >
          <Header />
        </Route>

        <Route path='/info/' >
          <Main />
        </Route>
      </Router>
     );
  }
}
 
export default App;
