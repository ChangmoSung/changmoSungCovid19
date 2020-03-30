import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render() { 
        return ( 
            <header>
                <Nav />

                <h1>save the one you love</h1>
            </header>
         );
    }
}
 
export default Header;