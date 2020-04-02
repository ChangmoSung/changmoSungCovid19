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
            url: 'https://newsapi.org/v2/top-headlines',
            method: "GET",
            params: {
                language: 'en',
                q: 'COVID',
                from: '2020-03-16',
                sortBy: 'publishedAt',
                apiKey: '0741cdf2415e4f44a92f80f69c904834',
                pageSize: '50',
                page: '1'
            }
        }).then(res => {
            this.setState({
                news: res.data.articles
            })
        })
    }

    render() { 
        return ( 
            <div className='news'>
                <ul className='newsList'>
                    {this.state.news.map((news, i) => {
                        return (
                            <li key={i}>
                                <h3>{news.title}</h3>

                                <p>By {!news.author || news.author.includes('http') ? 'anonymous author' : news.author}</p>

                                <p>Published on {news.publishedAt.slice(0, 10)}</p>

                                <div className='newsArticle'>
                                    <img src={news.urlToImage} alt='article'></img>
                                </div>

                                <p className='newsDescription'>{news.description}</p>

                                <a href={news.url}><span tabIndex='0'>Link to the article</span></a>
                            </li>
                        )
                    })}
                </ul>
            </div>
         );
    }
}
 
export default News;