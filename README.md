# required-from
[![CircleCI](https://circleci.com/gh/nivrith/required-from/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/required-from/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/required-from.svg)](https://github.com/nivrith/required-from/blob/master/LICENSE)
[![License MIT](https://img.shields.io/github/license/nivrith/required-from.svg)](https://github.com/nivrith/required-from/blob/master/LICENSE)

Get absolute path to the module that required your module

## Usage

> Get Absolute Path of Parent Module

~~~ js
// project root

  ├── index.js
  ├── foo.js
  ├── bar.js
  └── baz.js
~~~

```js

// index.js (entry point of app)

const foo = require('./foo')

// foo.js

const bar = require('./bar');

// bar.js

const requiredFrom = require('required-from');

const requireDirectory = requiredFrom();

console.log(requiredDirectory); // /absolute/path/to/foo.js

```

**Note:** *It will throw an error if you try to call it from a module that is not required by a parent module during runtime.*

## License

MIT © [Nivrith Mandayam Gomatam](https://au.linkedin.com/in/nivrith-gomatam-43bb7aa5)
