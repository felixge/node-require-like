var Module = require('module');
var dirname = require('path').dirname;

module.exports = function requireLike(path, uncached) {
  var parentModule = new Module(path);
  parentModule.filename = path;
  parentModule.paths = Module._nodeModulePaths(dirname(path));

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

  try {
    requireLike.paths = require.paths;
  } catch (e) {
    //require.paths was deprecated in node v0.5.x
    //it now throws an exception when called
  }
  requireLike.main = process.mainModule;
  requireLike.extensions = require.extensions;
  requireLike.cache = require.cache;

  return requireLike;
};
