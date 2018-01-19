# parse-markdown-links

> Get all links from a markdown string.

![Node version](https://img.shields.io/node/v/parse-markdown-links.svg)
[![Build Status](https://travis-ci.org/ralphtheninja/parse-markdown-links.svg?branch=master)](https://travis-ci.org/ralphtheninja/parse-markdown-links)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Piggy backs on top of [`remarkable`](https://github.com/jonschlinkert/remarkable) to get a list of parsed tokens corresponding to links.

## Install

```
$ npm i parse-markdown-links -S
```

## Usage

```js
const parse = require('parse-markdown-links')
console.log(parse('[a link](https://woohoo.com)\n![image](image.png)'))
// [ 'https://woohoo.com' , 'image.png' ]
```

## API

### `parse(text)`

Takes a markdown string and returns an array of links.

## License

MIT
