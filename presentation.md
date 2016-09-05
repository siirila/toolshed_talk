## Outline
History
Epic slide
Concepts/Tools
Opinions
Future



# History
A brief, mostly inaccurate, and completely subjective history of front-end tooling

# Before 1999
Simple

Backend does 99% of the work


# 1999 & 2000
Microsoft creates XMLHTTP
Mozilla creates XMLHTTPRequest

The beginning of AJAX


# 2000-2004
Nothing!



# 2005 & 2006
JS Frameworks Generation 1
Note:jQuery
Google Web Toolkit
YUI
Dojo
Prototype
MooTools


> With great power, comes the need for great tooling!
Somebody...maybe


Minify
Compress
Lint
Note: With larger JS codebased, we needed to create quality code and optimize
the browser performance


# 2002 & 2003
Douglas Crockford travels back in time to create the tooling we will need in the future

JSLint
JSMin


# 2007 - 2009
We start building complex web applications


# 2009
Modules
- CommonJS
- AMD
JavaScript Everywhere
- Node
JavaScript Nowhere
- CoffeeScript
Note: This produces the need for 

# 2010
Let's go to the SPA
- Angular
npm is creates solely to allow the left-pad fiasco in 6 years

# 2012
We still hate JS, just not as much
- TypeScript


# 2013
You got your JS in my markup
You got your markup in my JS
- JSX

# 2015
JS is looking a little dated, how about a refresh
- ES6/ES2015
Maybe we should create a proper JS module?
- ES6 modules
Oops...we forgot to include the module loader



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
- Each tools has it's own dot file (.eslint, .babel, .editorconfig, .gitignore, .gitconfig, .vscode, .etc)



# Front-end Development Steps
Note: Feature Checklist
- [ ] Generators
- [ ] Lint
- [ ] Development Server
  - [ ] Live Reload
- [ ] Watch
- [ ] Unit Test
- [ ] Transpile
- [ ] Preprocess
- [ ] Minify
- [ ] Concatenate
- [ ] Source Maps
- [ ] Optimize Images


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



# Awesome Animated Slide



# Stop Graphic


# Head Hurts Graphic


# Too many options and choices...how to make a decision?


# Make Fewer Decisions
- What?
- Decision Fatique
- Decision Avoidance
- Impaired self-regulation
- Spend your time adding value, not making minor tooling decisions


## How to make fewer decisions
- Abstract away the decisions and complexity
  - Let somebody else make the choice
  - Choose tools that can accomplish multiple functions
  - Wrap underlying tools through a common interface
- Use presets
  - babel-preset-es2015
  - AirBnB ESLint rules
- Use conventions



# Let Somebody Else Make the Choice
- ember-cli
- angular-cli (Angular 2)
- create-react-application
- vue-cli
- angular-seed (Angular 1)


# Ember-cli
- Development server
- Generators
- Template compilation
- JS & CSS minification
- ES2015 support

- [X] Generators
- [X] Lint
- [X] Development Server
  - [X] Live Reload
- [X] Watch
- [X] Test
- [X] Transpile
- [X] Preprocess
- [X] Minify
- [X] Concatenate
- [X] Source Maps
- [ ] Optimize Images



# Angular-cli
- Development server
- Generators
- Template compilation
- JS & CSS minification
- ES2015 support

- [X] Generators
- [X] Lint
- [X] Development Server
  - [X] Live Reload
- [X] Watch
- [X] Test
- [X] Transpile
- [X] Preprocess
- [X] Minify
- [X] Concatenate
- [X] Source Maps
- [X] Optimize Images



# Create-react-app
- Wraps all function inside npm script calls
- No configuration files
- Hides the tool details in the npm module
- Development server
- Generators
- Template compilation
- JS & CSS minification
- ES2015 support
- Doesn't support LESS or Sass

- [X] Generators
- [X] Lint
- [X] Development Server
  - [X] Live Reload
- [X] Watch
- [X] Test
- [X] Transpile
- [X] Preprocess
- [X] Minify
- [X] Concatenate
- [X] Source Maps
- [X] Optimize Images



# Vue-cli
- Allows different toolchains
- Wraps all function inside npm script calls
- Development server
- Template compilation
- JS & CSS minification
- ES2015 support

- [ ] Generators
- [X] Lint
- [X] Development Server
  - [X] Live Reload
  - [X] Hot Reload
- [X] Watch
- [X] Test
- [X] Transpile
- [X] Preprocess
- [X] Minify
- [X] Concatenate
- [X] Source Maps
- [ ] Optimize Images



# Angular-seed
- Development server
- Testing

- [ ] Generators
- [ ] Lint
- [X] Development Server
  - [ ] Live Reload
- [ ] Watch
- [X] Test
- [ ] Transpile
- [ ] Preprocess
- [ ] Minify
- [ ] Concatenate
- [ ] Source Maps
- [ ] Optimize Images



Considerations when choosing a tool

| Consideration | Description |
| --- | --- |
| Stability |   |
| Flexibility |   |
| Simplicity |   |
| Maintainability |   |
| Number of tasks it can perform |   |
| Popularity |   |
| Performance when using |   |
| Performance of output |   |
Otherwise, let's start at the top and work our way down
| We may be able let a higher level decision remove decisions further down the stack



# First Choice - Package Manager
## npm
npm has taken over as the defacto package manager for front-end development.
There are some projects still using Bower (i.e. Ember), and some projects still only available through Bower.
JSPM is starting to gain traction, but not enough to consider it outside of SystemJS yet



# Minifiers
- Google Closure Compiler
- JSMin
- UglifyJS
- CSSNano
- HTMLMinifier
- YUICompressor



# Package Management
- npm
- Bower
- JSPM



# Task Runners
- Grunt
- Gulp
- npm
- Make


# Grunt
## The JavaScript Task Runner
### Configuration based multipurpose tool


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

  grunt.loadnpmTasks('grunt-contrib-jshint');
  grunt.loadnpmTasks('grunt-contrib-watch');

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



# npm