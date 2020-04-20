import React from 'react';

const Status = props => {
    // To add commas to number
    const addCommas = num => {
        return `${typeof num === 'number' ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}`
    }

    return (
        <div>
            <h2 className='date'>As of {props.currentDate}</h2>

            <ul className='currentStatusList'>
                <li>Total cases: {addCommas(props.currentStatus.TotalConfirmed)}</li>

                <li>Total recovered: {addCommas(props.currentStatus.TotalRecovered)}</li>

                <li>Recovery rate: {props.currentStatus.TotalRecovered > 0
                    ?
                    <span>
                        {(100 / (props.currentStatus.TotalConfirmed / props.currentStatus.TotalRecovered)).toFixed(2)}%
                        </span>
                    : 0}
                </li>

                <li>Total deaths: {addCommas(props.currentStatus.TotalDeaths)}</li>

                <li>Death rate: {props.currentStatus.TotalConfirmed ? (100 / (props.currentStatus.TotalConfirmed / props.currentStatus.TotalDeaths)).toFixed(2) : 0}%</li>
            </ul>
        </div>
    )
}

export default Status;