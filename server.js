var express = require('express');
var bodyParser = require('body-parser');
// var db = require('./config/connection.js');

var PORT = process.env.PORT || 8080;

var app = express();

// MIDDLEWARE
app.use('/static', express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// ROUTING
var routes = require('./controllers/router.js');
app.use('/', routes);

app.listen(PORT, function(){
  console.log('Port: ',PORT);
});