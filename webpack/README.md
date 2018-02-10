# Webpack
The configs here describe how webpack should work and are used depending on which npm command you are using.

## Production
Runs a bundling and minification on all components referenced in src/prod.js, which in turn picks up the index file in src/components/index.js
Anything included in the index will be packaged up and dropped in dist/

## Dev
Runs the development server and wires up the environment for rapid dev/testing.

## Analyze
Runs the production build and then opens a bundle analysis heatmap utility so you can see what libraries are included in the bundle.