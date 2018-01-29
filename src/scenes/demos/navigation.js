import React, {Component} from 'react';

import { sitemap } from '../../data/db.json';
import Navigation from '../../components/Navigation/Navigation';


class Navigation_Page extends Component {
    // https://facebook.github.io/react/docs/react-component.html#render
    render() {
        return (
            <div className='app'>
                <Navigation Model={sitemap} />
            </div>
        );
    }
}

export default Navigation_Page;