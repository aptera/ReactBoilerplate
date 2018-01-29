# React Boilerplate

This is a dev environment that allows you to develop react apps in a fresh and modern way.

Clone the repository and run *npm install* in the command line to get set up.  (If you're using VS Code, Ctrl + ~ will open terminal for you.)

### Run the following:

<code>
npm update

npm install
</code>

## Commands
*npm run start* - starts the dev server, including watch, and sets up hot-loading for auto-refreshing your changes as you save.  Just follow the link in the console to load the current App.

*npm run build* - outputs bundled build files that would be used in production. (individual js/css/maps)  Configuration is found in webpack/prod.config.js

*npm run test* - starts up jest testing environment and watch.

* [what the hell is jest?](https://facebook.github.io/jest/)

*npm run analyze* - opens a page with bundle analysis, showing everying in the production bundle as squares relative to size.

* [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

*npm run json* - starts a json server that can be used for quickly scaffolding data types and mocking services for components. Automatically generates records with "faker."

* [json-server](https://github.com/typicode/json-server)
* [faker](https://github.com/Marak/Faker.js)

## Codebase
This boilerplate comes with a number of tools you can use to quickly author react components.  There are a number of components already here to get you started.

## Resources
* [React](https://reactjs.org/)
* [Jest](https://facebook.github.io/jest/)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/learn-es2015/)