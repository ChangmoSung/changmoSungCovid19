import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Nav extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render() { 
        return ( 
            <nav>
                <ul>
                    <li>
                        <Link to='/info/statistic'>statistic</Link>
                    </li>

                    <li>
                        <Link to='/info/news'>news</Link>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default Nav;