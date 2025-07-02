var common = exports;

var path = require('path');
var root = path.dirname(__dirname);

common.dir = {
  lib: path.join(root,'lib'),
  fixture: path.join(root,'test','fixture'),
};

common.assert = require('assert');
