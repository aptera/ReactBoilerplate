import React, {Component} from 'react';
import ArticleListContainer from '../../components/Articles/ArticleListContainer';
//import { articles, authors } from '../../data/db.json';

const divStyle = {
    margin: '20px',
    display: 'flex'
};

// const data = {
//     articles: articles,
//     authors: authors,
// };

class ArticleList_Page extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={divStyle}>
                <ArticleListContainer />
            </div>
        );
    }
}

export default ArticleList_Page;