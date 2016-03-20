var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  username:{
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  cartItems:[{
    type: Schema.Types.ObjectID,
    ref:'Item'
  }]
});

module.exports = mongoose.model('User', itemsSchema);