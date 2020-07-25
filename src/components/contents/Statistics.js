import React, { Component } from 'react';
import Status from './Status';
import SearchedCountry from './SearchedCountry';

class Statistic extends Component {
    constructor() {
        super();

        this.state = {
            searchedCountry: [],
        };

        this.searchInput = React.createRef();
    }

    
    // To add commas to number
    addCommas = num => {
        return `${typeof num === 'number' ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}`
    }


    // To search a specific country
    searchCountry = e => {
        e.preventDefault();

        const country = this.searchInput.current.value.replace(/[^\w]/gi, '').toLowerCase();

        const searchedCountry = this.props.currentStatistics.filter(({ Country }) => Country.replace(/[^\w]/gi, '').toLowerCase().includes(country));

        if(searchedCountry.length > 0) {
            this.setState({
                searchedCountry
            })
        } else {
            alert('There is no matching country');
        }

        this.searchInput.current.value = '';
    }


    render() { 
        const { currentDate, currentStatus, currentStatistics } = this.props;
        const { searchCountry, searchInput, addCommas } = this;
        const { searchedCountry } = this.state;

        return ( 
            <div className='statistics'>
                <Status 
                    currentDate={currentDate}
                    currentStatus={currentStatus}
                />

                <div className='searchFormContainer'>
                    <form onSubmit={searchCountry}>
                        <input
                            ref={searchInput} 
                            type='text'
                            placeholder='type a country'
                            required>
                        </input>

                        <button>SEARCH</button>
                    </form>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Country</th>

                            <th>Cases</th>

                            <th>Recovered</th>

                            <th>Recovery rate</th>

                            <th>Deaths</th>

                            <th>Death rate</th>
                        </tr>
                    </thead>

                    <tbody>
                        <SearchedCountry 
                            searchedCountry={searchedCountry}
                        />

                        {currentStatistics.map(({ Country, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered }, i) => {
                            return (
                                <tr key={i}>
                                    <td>{Country}</td>

                                    <td className='totalCases'>
                                        <span>
                                            {addCommas(TotalConfirmed)}
                                        </span>

                                        {NewConfirmed && NewConfirmed != TotalConfirmed
                                        ? 
                                        <span>
                                            <span className='arrow'></span>

                                            <span>
                                                {addCommas(NewConfirmed)}
                                            </span>
                                        </span>
                                        : null}
                                    </td>

                                    <td className='totalRecovered'>
                                        <span>
                                            {TotalRecovered ? 
                                                addCommas(TotalRecovered)
                                            : 'NEI'}
                                        </span>
                                    
                                        {NewRecovered && NewRecovered != TotalRecovered
                                        ?
                                        <span>
                                            <span className='arrow'></span>

                                            <span>{addCommas(NewRecovered)}</span>
                                        </span>
                                        : null}
                                    </td>

                                    <td>
                                        {TotalRecovered
                                        ?
                                        <span>
                                            {(100 / (TotalConfirmed / TotalRecovered)).toFixed(2)}%
                                        </span>
                                        : <span>NEI</span>}
                                    </td>

                                    <td className='totalDeaths'>
                                        <span>
                                            {TotalDeaths ? 
                                                addCommas(TotalDeaths)
                                            : 'NEI'}
                                        </span>

                                        {NewDeaths && NewDeaths != TotalDeaths
                                        ?
                                        <span>
                                            <span className='arrow'></span>

                                            <span>
                                                {addCommas(NewDeaths)}
                                            </span>
                                        </span>
                                        : null}
                                    </td>

                                    <td>
                                        {TotalDeaths
                                        ? 
                                        <span>
                                            {(100 / (TotalConfirmed / TotalDeaths)).toFixed(2)}%
                                        </span>
                                        : <span>NEI</span>}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Statistic;