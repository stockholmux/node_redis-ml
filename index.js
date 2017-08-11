function addMlModule(redis) {
  var cmds = [
    "ml.forest.add",
    "ml.forest.run",
    "ml.linreg.set",
    "ml.linreg.predict",
    "ml.logreg.set",
    "ml.logreg.predict",
    "ml.matrix.set",
    "ml.matrix.get",
    "ml.matrix.add",
    "ml.matrix.multiply",
    "ml.matrix.scale",
    "ml.kmeans.set",
    "ml.kmeans.predict"
  ];
  
  cmds.forEach(function(aCmd) {
    redis.addCommand(aCmd);
  });
}
module.exports = addMlModule;