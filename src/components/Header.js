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
                <h1>SAVE THE ONE YOU LOVE</h1>

                <ul className='currentStatusList'>
                    <li>Total cases: {this.props.currentStatus.cases}</li>
                    <li>Recovered: {this.props.currentStatus.recovered}</li>
                    <li>Active: {this.props.currentStatus.active}</li>
                    <li>Deaths: {this.props.currentStatus.deaths}</li>
                </ul>
            </header>
         );
    }
}
 
export default Header;