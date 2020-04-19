import React, { Component } from 'react';

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

        const country = this.searchInput.current.value;

        const searchedCountry = this.props.currentStatistics.filter(status => status.Country.toLowerCase().includes(country.toLowerCase()));

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
                <h2 className='date'>As of {this.props.currentDate}</h2>
                
                <ul className='currentStatusList'>
                    <li>Affected countries: {this.addCommas(this.props.currentStatistics.length)}</li>

                    <li>Total cases: {this.addCommas(this.props.currentStatus.TotalConfirmed)}</li>

                    <li>Total recovered: {this.addCommas(this.props.currentStatus.TotalRecovered)}</li>

                    <li>Total deaths: {this.addCommas(this.props.currentStatus.TotalDeaths)}</li>
                    
                    <li>Death toll: {this.props.currentStatus.TotalConfirmed ? (100 / (this.props.currentStatus.TotalConfirmed / this.props.currentStatus.TotalDeaths)).toFixed(2) : 0}%</li>
                </ul>

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

                            <th>Deaths</th>

                            <th>Death toll</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.searchedCountry.map((country, i) => {
                            return (
                                <tr key={i}>
                                    <td className='searchedCountry'>* {country.Country}</td>

                                    <td className='totalCases'>
                                        <span>
                                            {this.addCommas(country.TotalConfirmed)}
                                        </span>

                                        {country.NewConfirmed > 0 
                                        ?
                                            <span>
                                                <span className='arrow'></span>

                                                {this.addCommas(country.NewConfirmed)}
                                            </span>
                                        :null}
                                    </td>

                                    <td>{this.addCommas(country.TotalRecovered)}</td>

                                    <td className='totalDeaths'>
                                        <span>
                                            {this.addCommas(country.TotalDeaths)}
                                        </span>
                                        
                                        {country.NewDeaths > 0 
                                        ?
                                            <span>
                                                <span className='arrow'></span>

                                                {this.addCommas(country.NewDeaths)}
                                            </span>
                                        :null}
                                    </td>

                                    <td>{(100 / (country.TotalConfirmed / country.TotalDeaths)).toFixed(2)}%</td>
                                </tr>
                            )
                        })}

                        {this.props.currentStatistics.map((status, i) => {
                            return (
                                <tr key={i}>
                                    <td>{status.Country}</td>

                                    <td className='totalCases'>
                                        <span>
                                            {this.addCommas(status.TotalConfirmed)}
                                        </span>

                                        {status.NewConfirmed > 0
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
                                            {this.addCommas(status.TotalRecovered)}
                                        </span>
                                    
                                        {status.NewRecovered > 0
                                        ?
                                        <span>
                                            <span className='arrow'></span>

                                            <span>{this.addCommas(status.NewRecovered)}</span>
                                        </span>
                                        : null}
                                    </td>

                                    <td className='totalDeaths'>
                                        <span>
                                            {this.addCommas(status.TotalDeaths)}
                                        </span>

                                        {status.NewDeaths > 0 
                                        ?
                                        <span>
                                            <span className='arrow'></span>

                                            <span>
                                                {this.addCommas(status.NewDeaths)}
                                            </span>
                                        </span>
                                        :null}
                                    </td>

                                    <td>{(100 / (status.TotalConfirmed / status.TotalDeaths)).toFixed(2)}%</td>
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