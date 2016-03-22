var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemsSchema = new Schema({
  name:{
    type: String,
    trim: true,
    required: true
  },
  price:{
    type: Number,
    trim: true,
    required: true
  },
  inStock:{
    type: Number,
    trim: true,
    required: true
  }
  // TODO Add comments with ref to users
});

module.exports = mongoose.model('Item', itemsSchema);