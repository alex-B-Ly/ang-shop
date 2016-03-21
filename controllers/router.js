var express = require('express');

var router = express.Router();

// Models
var Users = require('../models/users.js');

router.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

// REGISTER
router.post('/register', function(req, res){
  var newUser = new Users(req.body);

  newUser.save(function(err, doc){
    if(err){
      console.log(err);
    }else{
      res.send(doc);
    }
  });
});

// LOGIN
router.post('/login', function(req, res){
  Users.find({ username: req.body.username })
    .exec(function(err, user){
      if(err){
        console.log(err);
      }else{
        res.send(user);
      }
    });
});

module.exports = router;