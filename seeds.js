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
userCreate('John', 'Spartan', 117);
userCreate('tara', 'pass', 2750000);
userCreate('Major Tom', 'ground control', 100000);
userCreate('Louis XVI', 'wheresyourheadat', 50000);


// ITEM SEEDS
function itemCreate(itemn, iprice, stock){
  var item = new Items({name: itemn, price: iprice, inStock: stock});
  item.save();
}

itemCreate('chihuahua', 20, 52);
itemCreate('emu', 12000, 2);
itemCreate('mini giraffe', 8000, 1);
itemCreate('stray cat', 25, 543);
itemCreate('puffin', 3200, 4);
itemCreate('tiger', 47000, 1);