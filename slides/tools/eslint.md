# [ESLint](http://eslint.org/)


## Jokes
- When you want a heartless tool to enforce consistency in the least important aspects of your JS
- Finally, a way to make my whole team indent code properly (with tabs of 3 spaces)
- All the good JS names were taken


## Real overview
A tool to enforce style consistency and catch minor issues at compile time

Just like a lint catcher in a dryer catches small particles that individually are harmless,

but over time can add up to a big problem.



```
{
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
```


## Features
- Fully customizable
- Can be configured multiple ways
  - .eslintrc.* file
  - eslintConfig in package.json
  - Command line arguments
  - Comments in source files
- Has sensisble bundled rules
- All rules can be turned on or off
- All rules can trigger a warning or an error
- Supports many environments
  - Browser, node, es6, jasmine, [many more](http://eslint.org/docs/user-guide/configuring#specifying-environments)
  - Each environment has specific predefined globals
  - Environments are not mutually exclusive
- Supports different JavaScript versions
  - ES3,5(default),6,7,JSX
- Configuration cascading



## Advanced Example
Using the AirBnB configuration with some overrides at the top level
and another file in the test folder to add additional configuration


## Tips and Tricks
- Use an editor plugin
- Can autofix a subset of issues


## Thoughts
