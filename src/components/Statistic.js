import React, { Component } from 'react';
import axios from 'axios';

class Statistic extends Component {
    constructor() {
        super();

        this.state = {
            worldStatus: [],
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