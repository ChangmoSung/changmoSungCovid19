import React, { Component } from 'react';
import axios from 'axios';

class Article extends Component {
    constructor() {
        super();

        this.state = {
            article: [],
        }
    }


    // To get data for news articles here
    componentDidMount() {
        axios({
            url: 'https://newsapi.org/v2/top-headlines',
            method: "GET",
            params: {
                language: 'en',
                q: 'COVID',
                sortBy: 'publishedAt',
                apiKey: '7a50435871b44203ac210b60d2fdae74',
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

                                <p>
                                    By {! article.author || article.author.includes('http') 
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

                                <a href={article.url} target='_blank' rel='noopener noreferrer'>Link to the article</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
         );
    }
}
 
export default Article;