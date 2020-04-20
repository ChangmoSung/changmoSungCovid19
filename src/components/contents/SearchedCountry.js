import React from 'react';

const SearchedCountry = props => {
    // To add commas to number
    const addCommas = num => {
        return `${typeof num === 'number' ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}`
    }


    return (
        <React.Fragment>
            {props.searchedCountry.map((country, i) => {
                return (
                    <tr key={i}>
                        <td className='searchedCountry'>* {country.Country}</td>

                        <td className='totalCases'>
                            <span>
                                {addCommas(country.TotalConfirmed)}
                            </span>

                            {country.NewConfirmed > 0
                                ?
                                <span>
                                    <span className='arrow'></span>

                                    {addCommas(country.NewConfirmed)}
                                </span>
                                : null}
                        </td>

                        <td className='totalRecovered'>
                            <span>
                                {addCommas(country.TotalRecovered)}
                            </span>

                            {country.NewRecovered > 0
                                ?
                                <span>
                                    <span className='arrow'></span>

                                    {addCommas(country.NewRecovered)}
                                </span>
                                : null}
                        </td>

                        <td>
                            {country.TotalRecovered > 0
                                ?
                                <span>
                                    {(100 / (country.TotalConfirmed / country.TotalRecovered)).toFixed(2)}%
                                        </span>
                                : '0%'}
                        </td>

                        <td className='totalDeaths'>
                            <span>
                                {addCommas(country.TotalDeaths)}
                            </span>

                            {country.NewDeaths > 0
                                ?
                                <span>
                                    <span className='arrow'></span>

                                    {addCommas(country.NewDeaths)}
                                </span>
                                : null}
                        </td>

                        <td>
                            {country.TotalDeaths > 0
                                ?
                                <span>
                                    {(100 / (country.TotalConfirmed / country.TotalDeaths)).toFixed(2)}%
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