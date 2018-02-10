/**
 * Entry point of the webpack prod.config.js
 * 
 * This line targets the components directory and runs index.js
 */
require('expose-loader?Components!./components/index.js');