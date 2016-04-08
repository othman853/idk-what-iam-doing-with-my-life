module.exports = function (module) {

  var subject = require(module);
  var injections = {};

  subject.dependencies.map( (dependency) => injections[dependency] = require(dependency));
  
  return subject.build(injections);
}
