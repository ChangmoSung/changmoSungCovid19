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
                <li>Affected countries: {addCommas(props.currentStatistics.length)}</li>

                <li>Total cases: {addCommas(props.currentStatus.TotalConfirmed)}</li>

                <li>Total recovered: {addCommas(props.currentStatus.TotalRecovered)}</li>
                
                <li>Total deaths: {addCommas(props.currentStatus.TotalDeaths)}</li>

                <li>Death toll: {props.currentStatus.TotalConfirmed ? (100 / (props.currentStatus.TotalConfirmed / props.currentStatus.TotalDeaths)).toFixed(2) : 0}%</li>
            </ul>
        </header>
    );
}
 
export default Header;