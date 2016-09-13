# Package Manager
- Exposing the stupidity of the 260 character path limit in Windows
- Allows reuse and management of critical libraries, such as left-pad


## Purpose
- Reduce
- Reuse
- ~~Recycle~~
- Update
Note: The main purpose is to allow you to avoid NIH syndrome and manage dependencies efficiently


## Options
- npm (2010)
- Bower (2012)
- Duo (2014)
- JSPM (2014)


## Opinion
![NPM](images/logos/Npm-logo.svg)

Note: npm has taken over as the defacto package manager for front-end development.
There are some projects still using Bower (i.e. Ember), and some projects still only available through Bower.
JSPM is starting to gain traction, but not enough to consider it outside of SystemJS yet

---

# Generators
Used to scaffold out code quickly and consistently


## Options
- Yeoman (2012)
- Framework specific generator


## Opinion
- Use framework cli generators
- Avoid Yeoman

---

# Linters
Quality and consistency checker


## Options
- JSLint (2002)
- JSHint (2010)
- ESLint (2013)


## Opinion
![ESLint](images/logos/eslint.svg)ESLint

---

## Concatenator, Minifiers, & Source Maps
- Create fewer and smaller files for the browser to download
- A very basic form of obfuscation
- A source map allows you to view the unminified code for debugging,
but run the minified version of the code


## Options
- JSMin (2003)
- YUI Compressor
- Closure Compiler (2009)
- UglifyJS (2010)


## Opinion
- UglifyJS
- A detail to abstract away

---

# JS Transpiler
- Convert another programming language, such as CoffeeScript, or a superset of
JavaScript such as ES6 or TypeScript to browser compatible JavaScript

## Options
- Traceur (2012)
- Babel (2014)
- Language specific ones such as TypeScript and CoffeeScript


## Opinion
![Babel](images/logos/babel.svg)

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
