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

        const searchedCountry = this.props.currentStatistics.filter(status => status.Country.replace(/[^\w]/gi, '').toLowerCase().includes(country));

        if(searchedCountry.length === 0) {
            alert('There is no matching country');
        }

        this.setState({
            searchedCountry
        })

        this.searchInput.current.value = '';
    }


    render() { 
        return ( 
            <div className='statistics'>
                <Status 
                    currentDate={this.props.currentDate}
                    currentStatus={this.props.currentStatus}
                />

                <div className='searchFormContainer'>
                    <form onSubmit={this.searchCountry}>
                        <input
                            ref={this.searchInput} 
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
                            searchedCountry={this.state.searchedCountry}
                        />

                        {this.props.currentStatistics.map((status, i) => {
                            return (
                                <tr key={i}>
                                    <td>{status.Country}</td>

                                    <td className='totalCases'>
                                        <span>
                                            {this.addCommas(status.TotalConfirmed)}
                                        </span>

                                        {status.NewConfirmed && status.NewConfirmed != status.TotalConfirmed
                                        ? 
                                        <span>
                                            <span className='arrow'></span>

                                            <span>
                                                {this.addCommas(status.NewConfirmed)}
                                            </span>
                                        </span>
                                        : null}
                                    </td>

                                    <td className='totalRecovered'>
                                        <span>
                                            {status.TotalRecovered ? 
                                                this.addCommas(status.TotalRecovered)
                                            : 'NEI'}
                                        </span>
                                    
                                        {status.NewRecovered && status.NewRecovered != status.TotalRecovered
                                        ?
                                        <span>
                                            <span className='arrow'></span>

                                            <span>{this.addCommas(status.NewRecovered)}</span>
                                        </span>
                                        : null}
                                    </td>

                                    <td>
                                        {status.TotalRecovered
                                        ?
                                        <span>
                                            {(100 / (status.TotalConfirmed / status.TotalRecovered)).toFixed(2)}%
                                        </span>
                                        : <span>NEI</span>}
                                    </td>

                                    <td className='totalDeaths'>
                                        <span>
                                            {status.TotalDeaths ? 
                                                this.addCommas(status.TotalDeaths)
                                            : 'NEI'}
                                        </span>

                                        {status.NewDeaths && status.NewDeaths != status.TotalDeaths
                                        ?
                                        <span>
                                            <span className='arrow'></span>

                                            <span>
                                                {this.addCommas(status.NewDeaths)}
                                            </span>
                                        </span>
                                        : null}
                                    </td>

                                    <td>
                                        {status.TotalDeaths
                                        ? 
                                        <span>
                                            {(100 / (status.TotalConfirmed / status.TotalDeaths)).toFixed(2)}%
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