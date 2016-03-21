var express = require('express');

var router = express.Router();

// Models
var Users = require('../models/users.js');

router.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

router.post('/register', function(req, res){
  console.log(req.body);
});

module.exports = router;