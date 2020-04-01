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

                <h2 className='date'>As of {this.props.currentDate}</h2>

                <ul className='currentStatusList'>
                    <li>Total cases: {this.props.currentStatus.cases}</li>
                    <li>Total active: {this.props.currentStatus.active}</li>
                    <li>Total recovered: {this.props.currentStatus.recovered}</li>
                    <li>Total deaths: {this.props.currentStatus.deaths}</li>
                </ul>
            </header>
         );
    }
}
 
export default Header;