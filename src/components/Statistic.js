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

        const searchedCountry = this.searchInput.current.value;

        const match = this.state.worldStatus.filter(country => country.country.toLowerCase() === searchedCountry.toLowerCase());

        this.setState({
            searchedCountry: match,
        })
    }

    render() { 
        return ( 
            <div className='statistic'>
                <h2>As of {this.props.currentDate}</h2>

                <ul className='currentStatusList'>
                    <li>Number of affected countries: {this.state.worldStatus.length}</li>
                    <li>Total cases: {this.props.currentStatus.cases}</li>
                    <li>Deaths: {this.props.currentStatus.deaths}</li>
                    <li>Recovered: {this.props.currentStatus.recovered}</li>
                    <li>Active: {this.props.currentStatus.active}</li>
                </ul>

                <div className='searchFormContainer'>
                    <form onSubmit={this.searchCountry}>
                        <label htmlFor='country'>Search for country</label>
                        <input ref={this.searchInput} id='country' type='text'></input>
                        <button>SEARCH</button>
                    </form>
                </div>

                {this.state.searchedCountry.map((country, i) => {
                    return (
                        <p className='searchedCountry' key={i}>
                            <span>{country.country}</span>

                            <span>{country.cases}</span>

                            <span>{country.todayCases}</span>

                            <span>{country.active}</span>

                            <span>{country.recovered}</span>

                            <span>{country.deaths}</span>

                            <span>{country.todayDeaths}</span>

                            <span>{(100 / (country.cases / country.deaths)).toFixed(2)}%</span>
                        </p>
                    )
                })}

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
                        {this.state.worldStatus.map((status, i) => {
                            return (
                                <tr key={i}>
                                    <td>{status.country}</td>

                                    <td className='totalCases'>
                                        <span>{status.cases}</span>
                                        <span><span className='arrow'></span>{status.todayCases}</span>
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