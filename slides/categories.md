# Too many options and choices...how to make a decision?


# Make Fewer Decisions
- What?
- Decision Fatique
- Decision Avoidance
- Impaired self-regulation
- Spend your time adding value, not making minor tooling decisions


## How to make fewer decisions
- KISS
  - Defer decisions until they are necessary
- Abstract away underlying tools
  - Wrap underlying tools through a common interface
- Let someone else decide
  - Choose tools with sensible defaults
  - Choose tools that can accomplish multiple functions
- Use presets
  - babel-preset-es2015
  - AirBnB ESLint rules
- Use conventions

---

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

---

# Package Manager
Note: The main purpose is to allow you to avoid NIH syndrome and manage dependencies efficiently


## Options
- npm (2010)
- Bower (2012)
- Duo (2014)
- JSPM (2014)


## Opinion
npm has taken over as the defacto package manager for front-end development.
There are some projects still using Bower (i.e. Ember), and some projects still only available through Bower.
JSPM is starting to gain traction, but not enough to consider it outside of SystemJS yet

---

# Generators
Used to scaffold out code quickly and consistently


## Options
- Yeoman (2012)
- Framework specific generator


## Opinion
Generators are useful on large teams and for quick prototyping

They can also be useful to see how other people architect with a framework,
but only after you are familiar with the framework 

---

# Linters
Quality and consistency checker


## Options
- JSLint (2002)
- JSHint (2010)
- ESLint (2013)


## Opinion
ESLint is the most versatile option

---

# Concatenator, Minifiers, & Source Maps
Create fewer and smaller files for the browser to download

A very basic form of obfuscation

A source map allows you to view the unminified code for debugging,
but run the minified version of the code


## Options
- JSMin (2003)
- YUI Compressor
- Closure Compiler (2009)
- UglifyJS (2010)


## Opinion
Doesn't matter as long as it can create source maps

---

# JS Transpiler
Convert another programming language, such as CoffeeScript, or a superset of
JavaScript such as ES6 or TypeScript to browser compatible JavaScript

## Options
- Traceur (2012)
- Babel (2014)
- Language specific ones such as TypeScript and CoffeeScript


## Opinion
Go with an option that generates readable transpiled code.

Currently Babel does a great job of that.

---

# CSS Preprocessors
Write styling in a more powerful language and convert to CSS


## CSS Sucks!
- Duplication
- Magic strings
- Vendor prefixes


## Options
- Less
- Sass
- Stylus
- PostCSS (Actually a little different than a CSS preprocessed language)
- Autoprefixer (A PostCSS plugin)


## Opinion
Sass and Autoprefixer or PostCSS

Sass if you want to write styling similar to CSS
or if a designer will be providing the styling

PostCSS if you want more flexibility, want to write CSS in JS

---

# Module Loaders/Bundlers
JavaScript didn't have a native module concept until ES6,
so when JS frameworks started to become popular people worked on
module specs for JS.

AMD and CommonJS modules were a huge leap forward for JS development,
but they added the need to create module loaders to load the modules.


## Options
- RequireJS
- Browserify
- Webpack
- SystemJS
- Rollup


## Opinion
Webpack is the best option currently for most people

---

# Build Systems/Task Runners
These are the big boy of build tools.
They allow for you to perform nearly any build step,
but tend to require extensive configuration to setup

# Options
- Make
- Grunt
- Gulp
- Npm scripts
- Mimosa
- Brunch
- Broccoli.js
- SystemJS Builder
- Fly


## Opinion
Use npm scripts to abstract away any build tool or task runner used
Only include one of these tools if your build has complex requirements that can't be fulfilled with simpler tools

---

# Dev Server
With front-end frameworks that only talk to the back-end through an API came the need
for new development servers to quickly develop code without deploying a complex server



# More Information
Kicking Sass
