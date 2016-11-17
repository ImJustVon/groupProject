//  From node_modules
const express = require('exress');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//  Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

//  Declare routes

//  Connect routes

//  Set up connection
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

//  Connect to port
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Listening on port ' + server.address().port);
});
