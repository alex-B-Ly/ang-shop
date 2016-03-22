var express = require('express');

var router = express.Router();

// Models
var Users = require('../models/users.js');
var Items = require('../models/items.js');

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

// UPDATE-BALANCE
router.put('/update-balance', function(req, res){
  Users.findOneAndUpdate({ username: req.body.username }, {balance: req.body.balance}, {new:true}, function(err, doc){
    if(err){
      console.log(err);
      res.send(err);
    }else{
      res.send(doc);
    }
  });
});

// ANIMALS
router.get('/animals', function(req, res){
  Items.find({})
    .exec(function(err, animals){
      if(err){
        console.log(err);
      }else{
        res.send(animals);
      }
    });
});

// PURCHASE-ANIMAL
router.put('/purchase-animal', function(req, res){
  Items.findOneAndUpdate({_id: req.body.id}, {inStock: req.body.stock}, {new:true}, function(err, doc){
    if(err){
      res.send(err);
    }else{
      res.send(doc);
    }
  });
});  


module.exports = router;