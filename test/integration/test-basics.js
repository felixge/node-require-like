var common = require('../common');
var assert = common.assert;
var requireLike = require(common.dir.lib + '/require-like');


(function testWithCache() {
  var foo = require(common.dir.fixture + '/foo.js');
  var myRequire = requireLike(common.dir.fixture + '/bar.js');
  var myFoo = myRequire('./foo');

  assert.strictEqual(myFoo, foo);
})();

(function testWithoutCache() {
  var foo = require(common.dir.fixture + '/foo.js');
  var myRequire = requireLike(common.dir.fixture + '/bar.js', true);
  var myFoo = myRequire('./foo');

  assert.notStrictEqual(myFoo, foo);
  assert.deepEqual(myFoo, foo);
})();
