import React from 'react';
import './styles/article.scss';

const Article = (props) => {
    const { article, author } = props;
    return (
        <div className="article">
            <div className="h2">{article.title}</div>
            <div className="date">{article.date}</div>
            <div>
                <a className="website" href={author.website}>
                    <img src={author.avatar} /><br />
                    {author.firstName} {author.lastName}
                </a>
            </div>
            <div className="body">{article.body}</div>
        </div>
    );
};

export default Article;