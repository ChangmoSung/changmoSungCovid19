import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render() { 
        return ( 
            <header>
                <h1>save the one you love</h1>

                <ul className='currentStatusList'>
                    <li>total cases: {this.props.currentStatus.cases}</li>
                    <li>deaths: {this.props.currentStatus.deaths}</li>
                    <li>recovered: {this.props.currentStatus.recovered}</li>
                    <li>active: {this.props.currentStatus.active}</li>
                </ul>
            </header>
         );
    }
}
 
export default Header;