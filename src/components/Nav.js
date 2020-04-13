import React  from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    // To toggle nav at 768px when it turns into hamburger nav
    const toggleNav = () => {
        document.querySelector('nav').classList.toggle('showNav');

        document.querySelector('.navTrigger').classList.toggle('hideNavTrigger');
    }

    return ( 
        <nav className='nav'>
            <button className='navTrigger' onClick={toggleNav}>X</button>

            <ul>
                <li>
                    <Link to='/changmoSungCovid19/' onClick={toggleNav}>home
                    </Link>
                </li>

                <li>
                    <Link to='/changmoSungCovid19/info/aboutCovid19' onClick={toggleNav}>covid-19</Link>
                </li>

                <li>
                    <Link to='/changmoSungCovid19/info/selfcheck' onClick={toggleNav}>self-check</Link>
                </li>

                <li>
                    <Link to='/changmoSungCovid19/info/statistic' onClick={toggleNav}>statistics</Link>
                </li>

                <li>
                    <Link to='/changmoSungCovid19/info/article' onClick={toggleNav}>articles</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Nav;