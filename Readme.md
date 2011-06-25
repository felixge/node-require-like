# require-like

Generates require functions that act like those of a given module.

## Install

``` bash
npm install require-like
```

## Usage

A require function that acts as if it was executed in `'./lib/bar'`:

``` javascript
var myRequire = require('require-like').module(__dirname + '/lib/bar.js');

var myFoo = myRequire('./foo.js');
var foo = require('./lib/foo');

require('assert').strictEquals(myFoo, foo);
```

## What to do with this

I use this library for dependency injection in unit tests. However, you could
also use it to create experimental require addons yourself.

## License

require-like is licensed under the MIT license.
