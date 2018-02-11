# React Component Pipeline

This is a dev environment that allows you to author react components in a framework that supports modularization of components in a production pipeline.

More concisely, it solves the issues of portable code, separation of concerns, and contextual grouping of concepts by focusing on the isolation of functionality such that individual pieces may be easily extracted, extrapolated, and shared.

More succinctly, it is good.

## Quickstart:

Clone the repository and run `npm install` in the command line to get set up.  (If you're using VS Code, Ctrl + ~ will open terminal for you.)

Once that's finished, kick things off with this:

`npm run start`

And if you want the full experience, kick a couple other things off in separate consoles so you can see testing metrics, live previews, and spin up the json-server data services.

`npm run start`

`npm run json`

`npm run test`
</code>

# Commands
`npm run start` - starts a dev server, watch, and sets up HMR (hot module reloading) for auto-refreshing your changes as you save. Just follow the link in the console to load the app.

`npm run build` - generates bundled assets that are to be used in production. (individual js/css/maps)  Configuration is found in webpack/prod.config.js, and production assets can be found in the /build/ folder.

`npm run test` - starts up the jest testing environment and watch to continually run tests as you code.

* [what the hell is jest?](https://facebook.github.io/jest/) (Hint: it's basically just jasmine with JSX support)

`npm run analyze` - spins up a service with bundle analysis, showing everying in the production bundle as squares relative to size.

* [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

`npm run json` - starts a json server that can be used for quickly scaffolding data types and services for components. Automatically generates randomized data with "faker" in /src/data/generate.js

* [json-server](https://github.com/typicode/json-server)
* [faker](https://github.com/Marak/Faker.js)

# Codebase
This boilerplate comes with a number of tools you can use to quickly author react components, and there are several components already here to get you acclimated. Here's a breakdown of where things are:
```
__mocks__           - global mocks for testing
dist                - production bundle output directory
src                 - all the working code
-- components       - react components
-- data             - json-server data generator
-- scenes           - staging area for components 
webpack             - configs for webpack bundling
```
# Resources
Good material to read up on
* [React](https://reactjs.org/)
* [Jest](https://facebook.github.io/jest/)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/learn-es2015/)

# Plugins
For VSCode users, you might want to consider adding a few extensions to enhance your experience.

* ESLint
* Flow
* 

