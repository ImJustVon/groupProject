//  From node_modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./connection');

const app = express();

//  Middleware
connection.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

//  Declare routes
const food = require('./routes/food');
const feedback = require('./routes/feedback');
const register = require('./routes/register');
const reports = require('./routes/reports');

//  Connect routes
app.use('/food', food);
app.use('/feedback', feedback);
app.use('/register', register);
app.use('/reports', reports);

//  Set up connection
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

//  Connect to port
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Listening on port ' + server.address().port);
});
