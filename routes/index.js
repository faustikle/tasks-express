var express = require('express');
var router = express.Router();
const MainController = require('../controllers/MainController')
const main = new MainController()

router.get('/', function(req, res, next) {
  main.use('IndexController@index', req, res, next)
});

module.exports = router;
