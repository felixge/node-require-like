var Module = require('module');

module.exports = function requireLike(path, uncached) {
  var parentModule = new Module(path);
  parentModule.filename = path;

  function requireLike(file) {
    var cache = Module._cache;
    if (uncached) {
      Module._cache = {};
    }

    var exports = Module._load(file, parentModule);
    Module._cache = cache;

    return exports;
  };


  requireLike.resolve = function(request) {
    return Module._resolveFilename(request, parentModule)[1];
  }

  requireLike.paths = require.paths;
  requireLike.main = process.mainModule;
  requireLike.extensions = require.extensions;
  requireLike.cache = require.cache;

  return requireLike;
};
