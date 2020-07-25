import React from 'react';

const Status = ({ currentDate, currentStatus: { TotalConfirmed, TotalDeaths, TotalRecovered } }) => {
    // To add commas to number
    const addCommas = num => {
        return `${typeof num === 'number' ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}`
    }

    return (
        <div>
            <h2 className='date'>As of {currentDate}</h2>

            <ul className='currentStatusList'>
                <li>Total cases: {addCommas(TotalConfirmed)}</li>

                <li>Total recovered: {addCommas(TotalRecovered)}</li>

                <li>Recovery rate: {TotalRecovered > 0
                    ?
                    <span>
                        {(100 / (TotalConfirmed / TotalRecovered)).toFixed(2)}%
                        </span>
                    : 0}
                </li>

                <li>Total deaths: {addCommas(TotalDeaths)}</li>

                <li>Death rate: {TotalConfirmed ? (100 / (TotalConfirmed / TotalDeaths)).toFixed(2) : 0}%</li>
            </ul>
        </div>
    )
}

export default Status;