var mongoose = require('mongoose');
var db = require('./config/connection.js');
var Users = require('./models/users.js');
var Items = require('./models/items.js');

var user1 = new Users({username: 'Scorpion', password: 'getoverhere', balance: 666});
var user2 = new Users({username: 'John', password: 'Spartan', balance: 117});
var user3 = new Users({username: 'tara', password: 'pass', balance: 2750000});
var user4 = new Users({username: 'Major Tom', password: 'ground control', balance: 100000});
var user5 = new Users({username: 'Louis XVI', password: 'wheresyourheadat', balance: 50000});

var userList = [user1, user2, user3, user4, user5];

for(var i=0; i<userList.length; i++){
  userList[i].save(function(err){if(err){throw err}});
}