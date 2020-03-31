import React, { Component } from 'react';
import axios from 'axios';

class Statistic extends Component {
    constructor() {
        super();

        this.state = {
            worldStatus: [],
            matchedCountries: [],
        }
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

    findMatches = (value, countries) => {
        return countries.filter(country => {
            const regex = new RegExp(value, 'gi');

            return country.country.match(regex);
        })
    }

    searchCountry = (e) => {
        const matchedCountries = this.findMatches(e.target.value, this.state.worldStatus);

        this.setState({
            matchedCountries: e.target.value.length >= 1 ? matchedCountries : [],
        })
    }

    render() { 
        return ( 
            <div>
                <ul>
                    <li>number of affected countries: {this.state.worldStatus.length}</li>
                    <li>total cases: {this.props.currentStatus.cases}</li>
                    <li>deaths: {this.props.currentStatus.deaths}</li>
                    <li>recovered: {this.props.currentStatus.recovered}</li>
                    <li>active: {this.props.currentStatus.active}</li>
                </ul>

                <div>
                    <form>
                        <label htmlFor='country'>search for country</label>
                        <input onChange={this.searchCountry} id='country' type='text'></input>
                    </form>

                    <ul>
                        {this.state.matchedCountries.map((matchedCountry, i) => {
                            return (
                                <li key={i}>{matchedCountry.country}</li>
                            )
                        })}
                    </ul>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>country</th>
                            <th>total cases</th>
                            <th>today cases</th>
                            <th>active</th>
                            <th>recovered</th>
                            <th>total deaths</th>
                            <th>today deaths</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.worldStatus.map((status, i) => {
                            return (
                                <tr key={i}>
                                    <td>{status.country}</td>
                                    <td>{status.cases}</td>
                                    <td>{status.todayCases}</td>
                                    <td>{status.active}</td>
                                    <td>{status.recovered}</td>
                                    <td>{status.deaths}</td>
                                    <td>{status.todayDeaths}</td>
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