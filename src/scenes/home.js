import React, {Component} from 'react';

import { authors, articles, sitemap } from './data/db.json';
import Navigation from '../components/Navigation/Navigation';


class Home extends Component {
    // https://facebook.github.io/react/docs/react-component.html#render
    render() {
        return (
            <div className='app'>
                This is a home page
            </div>
        );
    }
}

export default Home;