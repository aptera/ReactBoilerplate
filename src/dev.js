import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/index.js';

const rootEl = document.getElementById('root');

const render = (Component) =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootEl
    );

render(App);

if (module.hot) module.hot.accept('./scenes/index.js', () => render(App));

// Expose collection to UI - Interferes with Hot Module Reloading
require('expose-loader?Components!./components');