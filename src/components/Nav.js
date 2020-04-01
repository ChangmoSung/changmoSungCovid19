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
            <nav className='nav'>
                <ul>
                    <li>
                        <Link to='/changmoSungCovid19/'>HOME</Link>
                    </li>

                    <li>
                        <Link to='/changmoSungCovid19/info/selfcheck'>SELF-CHECK</Link>
                    </li>

                    <li>
                        <Link to='/changmoSungCovid19/info/statistic'>STATISTIC</Link>
                    </li>

                    <li>
                        <Link to='/changmoSungCovid19/info/news'>NEWS</Link>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default Nav;