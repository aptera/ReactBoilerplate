import React, { Component } from 'react';
import ArticleList from './ArticleList';

const fetchData = (d) => {

    let authors = [];
    let articles = [];

    fetch('http://localhost:3000/articles')
        .then((articledata) => { 
            return articledata.json(); 
        })
        .then((data) => { 
            articles = data; 

            fetch('http://localhost:3000/authors')
                .then((authordata) => { 
                    return authordata.json(); 
                })
                .then((data) => {
                    authors = data; 
                    d(articles, authors);
                });
        });
};

class ArticleListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: [], 
            authors: []
        };
    }
    componentDidMount() {
        fetchData((articles, authors) => {
            this.setState({ articles: articles, authors: authors });
        });   
    }
    render() {
        return <ArticleList articles={this.state.articles} authors={this.state.authors} />;
    }
}

export default ArticleListContainer;