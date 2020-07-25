import React from 'react';

const SearchedCountry = ({ searchedCountry }) => {
    // To add commas to number
    const addCommas = num => {
        return `${typeof num === 'number' ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}`;
    }

    return (
        <React.Fragment>
            {searchedCountry.map(({ Country, TotalConfirmed, NewConfirmed, TotalRecovered, NewRecovered, TotalDeaths, NewDeaths }, i) => {
                return (
                    <tr key={i}>
                        <td className='searchedCountry'>* {Country}</td>

                        <td className='totalCases'>
                            <span>
                                {addCommas(TotalConfirmed)}
                            </span>

                            {NewConfirmed > 0
                                ?
                                <span>
                                    <span className='arrow'></span>

                                    {addCommas(NewConfirmed)}
                                </span>
                                : null}
                        </td>

                        <td className='totalRecovered'>
                            <span>
                                {addCommas(TotalRecovered)}
                            </span>

                            {NewRecovered > 0
                                ?
                                <span>
                                    <span className='arrow'></span>

                                    {addCommas(NewRecovered)}
                                </span>
                                : null}
                        </td>

                        <td>
                            {TotalRecovered > 0
                                ?
                                <span>
                                    {(100 / (TotalConfirmed / TotalRecovered)).toFixed(2)}%
                                        </span>
                                : '0%'}
                        </td>

                        <td className='totalDeaths'>
                            <span>
                                {addCommas(TotalDeaths)}
                            </span>

                            {NewDeaths > 0
                                ?
                                <span>
                                    <span className='arrow'></span>

                                    {addCommas(NewDeaths)}
                                </span>
                                : null}
                        </td>

                        <td>
                            {TotalDeaths > 0
                                ?
                                <span>
                                    {(100 / (TotalConfirmed / TotalDeaths)).toFixed(2)}%
                                        </span>
                                : '0%'}
                        </td>
                    </tr>
                )
            })}
        </React.Fragment>
    )
}

export default SearchedCountry;