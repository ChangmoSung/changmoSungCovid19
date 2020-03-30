import React, { Component } from 'react';
import {
    Route,
} from 'react-router-dom';
import Nav from './Nav';
import Statistic from './Statistic';
import News from './News';

class Main extends Component {
    constructor() {
        super();

        this.state = {

        };
    }
    render() { 
        return ( 
            <main>
                <Nav />

                <Route path='/changmoSungCovid19/info/statistic'>
                    <Statistic currentStatus={this.props.currentStatus} />
                </Route>

                <Route path='/changmoSungCovid19/info/news'>
                    <News />
                </Route>
            </main>
         );
    }
}
 
export default Main;