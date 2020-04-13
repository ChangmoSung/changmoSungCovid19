import React, { Component } from 'react';
import axios from 'axios';

class Statistic extends Component {
    constructor() {
        super();

        this.state = {
            worldStatus: [],
            searchedCountry: [],
        };
        this.searchInput = React.createRef();
    }

    
    // To get data for statistics here. 
    componentDidMount() {
        axios({
            url: `https://corona.lmao.ninja/countries?sort=country`,
            method: "GET",
        }).then(res => {
            // To sort in the order of the most vulnerable countries 
            const seriousness = res.data.sort((a, b) => a.cases > b.cases ? -1 : 1);
            
            this.setState({
                worldStatus: seriousness
            })
        })
    }


    // To add commas to number
    addCommas = num => {
        return `${typeof num === 'number' ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0}`
    }


    // To search a specific country
    searchCountry = e => {
        e.preventDefault();

        const country = this.searchInput.current.value;

        const searchedCountry = this.state.worldStatus.filter(status => status.country.toLowerCase().includes(country.toLowerCase()));

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
                    <li>Affected countries: {this.addCommas(this.state.worldStatus.length)}</li>
                    <li>Total cases: {this.addCommas(this.props.currentStatus.cases)}</li>
                    <li>Total active: {this.addCommas(this.props.currentStatus.active)}</li>
                    <li>Total recovered: {this.addCommas(this.props.currentStatus.recovered)}</li>
                    <li>Total deaths: {this.addCommas(this.props.currentStatus.deaths)}</li>
                </ul>

                <div className='searchFormContainer'>
                    <form onSubmit={this.searchCountry}>
                        <input
                            ref={this.searchInput} 
                            id='country'
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

                            <th>Active</th>

                            <th>Recovered</th>

                            <th>Deaths</th>

                            <th>Death toll</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.searchedCountry.map((country, i) => {
                            return (
                                <tr key={i}>
                                    <td className='searchedCountry'>* {country.country}</td>

                                    <td className='totalCases'>
                                        <span>
                                            {this.addCommas(country.cases)}
                                        </span>

                                        {country.todayCases > 0 
                                        ?
                                            <span>
                                                <span className='arrow'></span>
                                                {this.addCommas(country.todayCases)}
                                            </span>
                                        :null}
                                    </td>

                                    <td>{this.addCommas(country.active)}</td>

                                    <td>{this.addCommas(country.recovered)}</td>

                                    <td className='totalDeaths'>
                                        <span>{this.addCommas(country.deaths)}</span>
                                        
                                        {country.todayDeaths > 0 
                                        ?
                                            <span>
                                                <span className='arrow'></span>

                                                {this.addCommas(country.todayDeaths)}
                                            </span>
                                        :null}
                                    </td>

                                    <td>{(100 / (country.cases / country.deaths)).toFixed(2)}%</td>
                                </tr>
                            )
                        })}

                        {this.state.worldStatus.map((status, i) => {
                            return (
                                <tr key={i}>
                                    <td>{status.country}</td>

                                    <td className='totalCases'>
                                        <span>{this.addCommas(status.cases)}</span>

                                        {status.todayCases > 0 
                                        ?
                                        <span>
                                            <span className='arrow'></span>

                                            <span>{this.addCommas(status.todayCases)}</span>
                                        </span>
                                        :null}
                                    </td>

                                    <td>{this.addCommas(status.active)}</td>

                                    <td>{this.addCommas(status.recovered)}</td>

                                    <td className='totalDeaths'>
                                        <span>{this.addCommas(status.deaths)}</span>

                                        {status.todayDeaths > 0 
                                        ?
                                        <span>
                                            <span className='arrow'></span>

                                            <span>{this.addCommas(status.todayDeaths)}</span>
                                        </span>
                                        :null}
                                    </td>

                                    <td>{(100 / (status.cases / status.deaths)).toFixed(2)}%</td>
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