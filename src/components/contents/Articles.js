import React, { Component } from 'react';
import axios from 'axios';

class Article extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],
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
                apiKey: '6dd80b26ac444d33aa5955bcb6e9eefe',
                pageSize: '50',
                page: '1'
            }
        }).then(({ data: { articles } }) => {
            this.setState({
                articles
            })
        })
    }

    render() {
        const { articles } = this.state;

        return ( 
            <div className='article'>
                <ul className='articleList'>
                    {articles.map(({ title, author, publishedAt, urlToImage, description, url }, i) => {
                        return (
                            <li key={i}>
                                <h3>{title}</h3>

                                <p>
                                    By {! author || author.includes('http') 
                                        ? 'anonymous author' 
                                        : author}
                                </p>

                                <p>Published on {publishedAt.slice(0, 10)}</p>

                                <div className='articleImage'>
                                    {urlToImage 
                                    ?
                                        <img src={urlToImage} alt='article'></img>
                                    : 
                                        <p>There is no image for this article</p>}
                                </div>

                                <p className='articleDescription'>{description}</p>

                                <a href={url} target='_blank' rel='noopener noreferrer'>Link to the article</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
         );
    }
}
 
export default Article;