import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {
    constructor() {
        super();

        this.state = {
            news: [],
        }
    }

    componentDidMount() {
        axios({
            url: `https://newsapi.org/v2/everything?q=COVID&from=2020-03-16&sortBy=publishedAt&apiKey=0741cdf2415e4f44a92f80f69c904834&pageSize=100&page=1`,
            method: "GET",
        }).then(res => {
            this.setState({
                news: res.data.articles
            })
        })
    }

    render() { 
        return ( 
            <div className='news'>
                <ul className='newsList wrapper'>
                    {this.state.news.map((news, i) => {
                        return (
                            <li key={i}>
                                <h3>{news.title}</h3>

                                <p>By {news.author}</p>

                                <p>{news.publishedAt}</p>

                                <div>
                                    <img src={news.urlToImage} alt='article'></img>
                                </div>

                                <p>{news.description}</p>

                                <a href={news.url}>link to the article</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
         );
    }
}
 
export default News;