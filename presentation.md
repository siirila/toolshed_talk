## Why do we need front-end tooling?
Front-end development used to be simple.

The markup and styling was served from the backend and could use whatever tooling existed for the backend.

Or it was so simple that no tooling was needed.


With dynamic pages and SPAs front-end tooling needed to handle a lot more
- Download dependencies
- Modularization
- Scaffold up an application
- Minify JavaScript, CSS, and HTML
- Concatenate files to minimize requests
- Create Source Maps
- CSS preprocessing from LESS, SASS, Etc
- Image optimization
- Lint
- Run unit tests
- Transpile to JavaScript
- Watch for changes
- Live reload / Hot reload



# Front-end Development Steps


# Architecture
## Generators / Scaffolding
## Boilerplate


# Package Management
## Download packages
## Update packages


# Develop
## Editor Tooling
## Lint
## Style Enforcement
## Watch for file changes
## Live Reload / Hot Reload


# Build
## Run Unit Tests
## Lint
## Transpile
## Preprocess CSS, HTML, Etc
## Optimize images
## Concatenate
## Minify
## Create Source Maps
## Development Server


# Deployment



# Minifiers
- Google Closure Compiler
- JSMin
- UglifyJS
- CSSNano
- HTMLMinifier
- YUICompressor



# Package Management
- NPM
- Bower



# Task Runners
- Grunt
- Gulp
- NPM
- Make


# Grunt
## The JavaScript Task Runner
### Configuration based build tool


## Sample
```JavaScript
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};
```


# Gulp
## Automate and enhance your workflow



# Transpile
We need to be able to transpile to JavaScript from
- TypeScript
- CoffeeScript
- JSX
- Dart
- Elm
- JavaScript??



# Module Bundlers
- Webpack
- Browserify
- Rollup.JS



# Webpack
    production
    unbiased
the flexible module bundler
    extensible
    open source



# Linters
- ESLint
- JSCS
- JSLint
- JSHint
- CSSLint




# ESLint



# Babel



# NPM