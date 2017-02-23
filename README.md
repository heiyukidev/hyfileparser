# Hei Yuki File Parser (hyfileparser)

This is a very small module that converts a file into an array of strings. Each element of the array is a line in the file.

## Quick Start

```bash
npm install hyfileparser
```

You then easily require the module:

```javascript
const hyparser = require('hyfileparser');
```

## How to Use

```javascript
const hyparser = require('./parser.js');


hyparser.fileToArray(PATH_TO_YOUR_FILE).then((arr) => {
    //arr is the array returned by the function
    console.log(arr);
    //Log or do whatever :3
}, (err) => {
    //err is an error message
    //Simply log it to know what's wrong
    console.log(err);
});
```

## License
MIT [heiyukidev](https://github.com/heiyukidev)

## About the Author
I'm Khaled Romdhane and my handle is @heiyukidev

If you stumble across this handle @heiyuki that's me, but not so professional.
