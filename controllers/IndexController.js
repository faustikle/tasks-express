'use strict';

function IndexController() {}

IndexController.prototype.index = function(req, res, next) {
  res.render('index', { title: 'funfoo' });
}


module.exports = new IndexController()
