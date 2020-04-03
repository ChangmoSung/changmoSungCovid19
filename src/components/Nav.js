import React  from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    let navOpened = false;

    const toggleNav = () => {
        navOpened = !navOpened

        document.querySelector('nav').classList.toggle('showNav');

        document.querySelector('.navTrigger').classList.toggle('hideNavTrigger')
    }

    return ( 
        <nav className='nav'>
            <button className='navTrigger' onClick={toggleNav}>
                <span>X</span>
            </button>

            <ul>
                <li>
                    <Link to='/changmoSungCovid19/' onClick={toggleNav}>
                        <span tabIndex='0'>home</span>
                    </Link>
                </li>

                <li>
                    <Link to='/changmoSungCovid19/info/aboutCovid19' onClick={toggleNav}>
                        <span tabIndex='0'>covid-19</span>
                    </Link>
                </li>

                <li>
                    <Link to='/changmoSungCovid19/info/selfcheck' onClick={toggleNav}>
                        <span tabIndex='0'>self-check</span>
                    </Link>
                </li>

                <li>
                    <Link to='/changmoSungCovid19/info/statistic' onClick={toggleNav}>
                        <span tabIndex='0'>statistic</span>
                    </Link>
                </li>

                <li>
                    <Link to='/changmoSungCovid19/info/article' onClick={toggleNav}>
                        <span tabIndex='0'>article</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Nav;