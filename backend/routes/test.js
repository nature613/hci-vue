var express = require('express');
var router = express.Router();
var tests = require('../test.json');

router.get('/', function (req, res, next) {
  res.send(tests)
});

router.get('/:id', function (req, res, next) {
  var id = parseInt(req.params.id, 10)
  var tt= tests.filter(function (test) {
    return test.id === id
  });
  res.send(tt)
});

module.exports = router;