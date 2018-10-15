module.exports['version'] = require('../package.json').version

var loadedModules = [
  require('./feature.autogen'),
  require('./featureLayer'),
  require('./layer.autogen'),
  require('./map'),
  require('./osmLayer'),
  require('./pointFeature.autogen'),
  require('./sceneObject'),
  require('./tileLayer.autogen')
];

for (var i in loadedModules) {
  if (loadedModules.hasOwnProperty(i)) {
    var loadedModule = loadedModules[i];
    for (var targetName in loadedModule) {
      if (loadedModule.hasOwnProperty(targetName)) {
        module.exports[targetName] = loadedModule[targetName];
      }
    }
  }
}