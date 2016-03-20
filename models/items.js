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
  },
  comments:[{
    // TODO Finish this model
  }]
});

module.exports = mongoose.model('Item', itemsSchema);