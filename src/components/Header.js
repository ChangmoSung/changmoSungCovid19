import React, { Component } from 'react';

class Header extends Component {
    addCommas = num => {
        if (typeof num === 'number') {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        } else {
            return 0;
        }
    }


    render() { 
        return ( 
            <header>
                <h1>SAVE THE ONE YOU LOVE</h1>

                <h2 className='date'>As of {this.props.currentDate}</h2>

                <ul className='currentStatusList'>
                    <li>Total cases: {this.addCommas(this.props.currentStatus.cases)}</li>
                    <li>Total active: {this.addCommas(this.props.currentStatus.active)}</li>
                    <li>Total recovered: {this.addCommas(this.props.currentStatus.recovered)}</li>
                    <li>Total deaths: {this.addCommas(this.props.currentStatus.deaths)}</li>
                </ul>
            </header>
         );
    }
}
 
export default Header;