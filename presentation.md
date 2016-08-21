## Why do we need front-end tooling?
Front-end development used to be simple.

The markup and styling was served from the backend and could use whatever tooling existed for the backend.

Or it was so simple that no tooling was needed.


With dynamic pages and SPAs front-end tooling needed to handle a lot more
- Download dependencies
- Scaffold up an application
- Minify JavaScript, CSS, and HTML
- Concatenate files to minimize requests
- CSS preprocessing from LESS, SASS, Etc
- Image optimization
- Lint
- Run unit tests
- Transpile to JavaScript
- Watch for changes
- Live reload / Hot reload



# 
# Task Runners

- Grunt
- Gulp


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



# Webpack
    production
    unbiased
the flexible module bundler
    extensible
    open source



# ESLint



# Babel



# NPM