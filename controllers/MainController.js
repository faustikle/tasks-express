'use strict';

function MainController (){}

MainController.prototype.use = function(path, req, res, next) {
  const controllerPath = path.split('@')[0]
  const actionPath = path.split('@')[1]

  const controller = require(`./${controllerPath}`)
  eval(`controller.${actionPath}(req, res, next)`)
}

module.exports = MainController
