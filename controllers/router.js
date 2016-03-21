var express = require('express');

var router = express.Router();

// Models
var Users = require('../models/users.js');

router.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

router.post('/register', function(req, res){
  console.log(req.body);

  var newUser = new Users(req.body);

  newUser.save(function(err, doc){
    if(err){
      console.log(err);
    }else{
      res.send(doc);
    }
  });
});

module.exports = router;