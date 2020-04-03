import React, { Component } from 'react';
import axios from 'axios';

class Article extends Component {
    constructor() {
        super();

        this.state = {
            article: [],
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
                article: res.data.articles
            })
        })
    }

    render() { 
        return ( 
            <div className='article'>
                <ul className='articleList'>
                    {this.state.article.map((article, i) => {
                        return (
                            <li key={i}>
                                <h3>{article.title}</h3>

                                <p>By 
                                    {! article.author || article.author.includes('http') 
                                        ? 'anonymous author' 
                                        : article.author}
                                </p>

                                <p>Published on {article.publishedAt.slice(0, 10)}</p>

                                <div className='articleImage'>
                                    {article.urlToImage 
                                    ?
                                        <img src={article.urlToImage} alt='article'></img>
                                    : 
                                        <p>There is no image for this article</p>}
                                </div>

                                <p className='articleDescription'>{article.description}</p>

                                <a href={article.url} target='_blank' rel='noopener noreferrer'>
                                    <span tabIndex='0'>Link to the article</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
         );
    }
}
 
export default Article;