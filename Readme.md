# require-like

Generates require functions that act as if they were operating in a given path.

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

require('assert').strictEqual(myFoo, foo);
```

## API

### requireLike(path, [uncached])

Returns a require function that acts as if it was operating in the given
`path`.

Setting the `uncached` parameter to true returns a function that by-passes the
module cache.

## Implementation Details

The require functions returned by this module do not mirror the full require
API (`require.extensions`, etc.) because I don't need those. Patches for this
would be accepted so.

It is also worth noting that this module works by accessing private node APIs.
You shouldn't worry about that so, since I will make sure this module does not
break in the future by either patching it, or making a patch for node that
makes the needed APIs public.

## What to do with this

I use this library for dependency injection in unit tests. However, you could
also use it to create experimental require addons yourself.

## License

require-like is licensed under the MIT license.
