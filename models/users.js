var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

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
  balance:{
    type:Number
  }
  // cartItems:[{
  //   type: Schema.Types.ObjectID,
  //   ref:'Item'
  // }]
});

// usersSchema.pre('save', function(next){
//   var user = this;

//   bcrypt.genSalt(10, function(err, salt){
//     if(err){
//       return next(err);
//     }else{
//       bcrypt.hash(user.password, salt, function(err, hash){
//         if(err){return next(err)}

//         user.password = hash;
//         next();
//       });
//     }
//   });
// });

module.exports = mongoose.model('User', usersSchema);