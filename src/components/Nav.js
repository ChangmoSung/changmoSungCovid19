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
        document.querySelector('.navTrigger').classList.toggle('hideNavTrigger')
    }

    render() { 
        return ( 
            <nav className='nav'>
                <button className='navTrigger' onClick={this.toggleNav}><span>X</span></button>

                <ul>
                    <li>
                        <Link to='/changmoSungCovid19/' onClick={this.toggleNav}><span tabIndex='0'>HOME</span></Link>
                    </li>

                    <li>
                        <Link to='/changmoSungCovid19/info/aboutCovid19' onClick={this.toggleNav}><span tabIndex='0'>COVID-19</span></Link>
                    </li>

                    <li>
                        <Link to='/changmoSungCovid19/info/selfcheck' onClick={this.toggleNav}><span tabIndex='0'>SELF-CHECK</span></Link>
                    </li>

                    <li>
                        <Link to='/changmoSungCovid19/info/statistic' onClick={this.toggleNav}><span tabIndex='0'>STATISTIC</span></Link>
                    </li>

                    <li>
                        <Link to='/changmoSungCovid19/info/news' onClick={this.toggleNav}><span tabIndex='0'>NEWS</span></Link>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default Nav;