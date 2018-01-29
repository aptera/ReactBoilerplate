import React, {Component} from 'react';
import Article from './Article';
import values from 'object.values';

class ArticleList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            articles: props.articles,
            authors: props.authors
        };
    }
    
    lookupAuthor(authorId) {
        for(var x=0; x < this.state.authors.length; x++){
            if(this.state.authors[x].id == authorId){
                return this.state.authors[x];
            }
        }
    }

    // This is necessary because when called via ArticleListContainer 
    // (ajax data, the promise will return and this component needs to receive the new data)
    componentWillReceiveProps(props){
        this.setState({ articles: props.articles, authors: props.authors });
    }

    render(){
        return (
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <div className="articles">
                    {values(this.state.articles).map((article) => 
                        <Article
                            key={article.id}
                            article={article}
                            author={this.lookupAuthor(article.authorId)}
                        />
                    )}
                </div>
            </div>
        );
    } 
}

export default ArticleList;