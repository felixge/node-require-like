var Module = require('module');

module.exports = function requireLike(path, uncached) {
  var parentModule = new Module(path);
  parentModule.filename = path;

  return function(file) {
    var cache = Module._cache;
    if (uncached) {
      Module._cache = {};
    }

    var exports = Module._load(file, parentModule);
    Module._cache = cache;

    return exports;
  };
};
