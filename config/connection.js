var mongoose = require('mongoose');
var db = 'mongodb://localhost/angularshop';

module.exports = mongoose.connect(db);