var mongoose = require('mongoose');
var db = require('./config/connection.js');
var Users = require('./models/users.js');
var Items = require('./models/items.js');

// USER SEEDS
function userCreate(usern, pass, bal){
  var user = new Users({username: usern, password: pass, balance: bal});
  user.save();
}

userCreate('Scorpion', 'getoverhere', 666);
userCreate('Marco', 'areyourecordingthisbro', 25000);
userCreate('tara', 'pass', 2750000);
userCreate('Major Tom', 'ground control', 1000000);
userCreate('Lara', 'empty', 7850000);


// ITEM SEEDS
function itemCreate(itemn, iprice, stock){
  var item = new Items({name: itemn, price: iprice, inStock: stock});
  item.save();
}

itemCreate('Komodo Dragon', 67000, 3);
itemCreate('Emu', 17000, 2);
itemCreate('Mini Giraffe', 85000, 1);
itemCreate('White Rhino', 1000000, 2);
itemCreate('Puffin', 3500, 4);
itemCreate('Tiger', 47000, 2);
itemCreate('Red Condor', 38000, 1);