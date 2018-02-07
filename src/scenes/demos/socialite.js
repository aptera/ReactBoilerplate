import React, {Component} from 'react';
import SociaLite from '../../components/SociaLite/SociaLite';
//import { articles, authors } from '../../data/db.json';

const divStyle = {
    margin: '20px',
    display: 'flex'
};

// const data = {
//     articles: articles,
//     authors: authors,
// };

class SociaLite_Page extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={divStyle}>
                <SociaLite />
            </div>
        );
    }
}

export default SociaLite_Page;