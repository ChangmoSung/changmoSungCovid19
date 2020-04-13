import React from 'react';

const Header = props => {
    
    // To add commas to number
    const addCommas = num => {
        return `${typeof num === 'number' ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}`
    }

    
    return ( 
        <header>
            <h1>SAVE THE ONE YOU LOVE</h1>

            <h2 className='date'>As of {props.currentDate}</h2>

            <ul className='currentStatusList'>
                <li>Total cases: {addCommas(props.currentStatus.cases)}</li>

                <li>Total active: {addCommas(props.currentStatus.active)}</li>

                <li>Total recovered: {addCommas(props.currentStatus.recovered)}</li>
                
                <li>Total deaths: {addCommas(props.currentStatus.deaths)}</li>
            </ul>
        </header>
    );
}
 
export default Header;