import React from 'react';

import ProgressBar_Page from './demos/progressbar';
import Navigation_Page from './demos/navigation';
import Avatar_Page from './demos/avatar';
import NameTag_Page from './demos/nametag';
import Counter_Page from './demos/counter';
import PomodoroTimer_Page from './demos/pomodorotimer';
import Greeter_Page from './demos/greeter';
import Salutation_Page from './demos/salutation';
import ArticleList_Page from './demos/articles';
import SociaLite_Page from './demos/socialite';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const App = () => (
    <Router>
        <div style={{ display: 'flex' }}>
            <div style={{ width: '25%', padding: '25px' }}>
                <ul>
                    <li><Link to="/demos">Components</Link>
                        <ul>
                            <li><Link to="/demos/salutation">Salutation</Link></li>
                            <li><Link to="/demos/pomodorotimer">PomodoroTimer</Link></li>
                            <li><Link to="/demos/avatar">Avatar</Link></li>
                            <li><Link to="/demos/counter">Counter</Link></li>
                            <li><Link to="/demos/navigation">Navigation</Link></li>
                            <li><Link to="/demos/progressbar">Progress Bar</Link></li>
                            <li><Link to="/demos/greeter">Greeter</Link></li>
                            <li><Link to="/demos/nametag">Name Tag</Link></li>
                            <li><Link to="/demos/articles">Articles</Link></li>
                            <li><Link to="/demos/socialite">Socialite</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div style={{ width: '75%', padding: '25px' }}>
                <Route exact path="/demos" component={Components}/>

                <Route exact path="/demos/pomodorotimer" component={PomodoroTimer_Page}/>
                <Route exact path="/demos/avatar" component={Avatar_Page}/>
                <Route exact path="/demos/counter" component={Counter_Page}/>
                <Route exact path="/demos/greeter" component={Greeter_Page}/>
                <Route exact path="/demos/nametag" component={NameTag_Page}/>
                <Route exact path="/demos/navigation" component={Navigation_Page}/>
                <Route exact path="/demos/progressbar" component={ProgressBar_Page}/>
                <Route exact path="/demos/salutation" component={Salutation_Page}/>
                <Route exact path="/demos/articles" component={ArticleList_Page}/>
                <Route exact path="/demos/socialite" component={SociaLite_Page}/>
            </div>
        </div>
    </Router>
);

const Components = () => (
    <div>
        <h1>Components</h1>
    </div>
);

// Expose collection to UI
require('expose-loader?Components!../components');

export default App;