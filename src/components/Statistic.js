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

    componentDidMount() {
        axios({
            url: `https://corona.lmao.ninja/countries?sort=country`,
            method: "GET",
        }).then(res => {
            const seriousness = res.data.sort((a, b) => a.cases > b.cases ? -1 : 1);
            
            this.setState({
                worldStatus: seriousness
            })
        })
    }

    searchCountry = (e) => {
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
            <div className='statistic'>
                <h2 className='date'>As of {this.props.currentDate}</h2>

                <ul className='currentStatusList'>
                    <li>Affected countries: {this.state.worldStatus.length}</li>
                    <li>Total cases: {this.props.currentStatus.cases}</li>
                    <li>Total active: {this.props.currentStatus.active}</li>
                    <li>Total recovered: {this.props.currentStatus.recovered}</li>
                    <li>Total deaths: {this.props.currentStatus.deaths}</li>
                </ul>

                <div className='searchFormContainer'>
                    <form onSubmit={this.searchCountry}>
                        <input ref={this.searchInput} id='country' type='text' required></input>
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
                                            {country.cases}
                                        </span>
                                        <span>
                                            <span className='arrow'></span>
                                            {country.todayCases}
                                        </span>
                                    </td>

                                    <td>{country.active}</td>

                                    <td>{country.recovered}</td>

                                    <td className='totalDeaths'>
                                        <span>{country.deaths}</span>
                                        <span>
                                            <span className='arrow'></span>
                                            {country.todayDeaths}
                                        </span>
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
                                        <span>{status.cases}</span>
                                        <span>
                                            <span className='arrow'></span>
                                            {status.todayCases}
                                        </span>
                                    </td>

                                    <td>{status.active}</td>

                                    <td>{status.recovered}</td>

                                    <td className='totalDeaths'>
                                        <span>{status.deaths}</span>
                                        <span>
                                            <span className='arrow'></span>

                                            <span>{status.todayDeaths}</span>
                                        </span>
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