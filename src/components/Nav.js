import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            navOpened: false,
        }
    }

    toggleNav = () => {
        this.setState({
            navOpened: !this.state.navOpened,
        })

        document.querySelector('nav').classList.toggle('showNav');
    }

    render() { 
        return ( 
            <nav className='nav'>
                <button className='navTrigger' onClick={this.toggleNav}>X</button>

                <ul>
                    <li>
                        <Link to='/changmoSungCovid19/' onClick={this.toggleNav}>HOME</Link>
                    </li>

                    <li>
                        <Link to='/changmoSungCovid19/info/aboutCovid19' onClick={this.toggleNav}>COVID-19</Link>
                    </li>

                    <li>
                        <Link to='/changmoSungCovid19/info/selfcheck' onClick={this.toggleNav}>SELF-CHECK</Link>
                    </li>

                    <li>
                        <Link to='/changmoSungCovid19/info/statistic' onClick={this.toggleNav}>STATISTIC</Link>
                    </li>

                    <li>
                        <Link to='/changmoSungCovid19/info/news' onClick={this.toggleNav}>NEWS</Link>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default Nav;