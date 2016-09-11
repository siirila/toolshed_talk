# Grunt
## The JavaScript Task Runner
### Configuration based multipurpose tool


## Joke slide
- 


## Real overview


## Basic Example


## Features


## Advanced Example


## Tips and Tricks


## Thoughts


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
