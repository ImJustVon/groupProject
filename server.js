//  From node_modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./connection');
const favicon = require('serve-favicon');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

//passport
const auth = require('./auth/setup');
auth.setup();
const sessionConfig = {
  secret: 'admin only',
  key: 'admin', //not quite sure what this does so keep that in mind
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 60 * 1000,
    secure: false,
  },
};

connection.connect();


//  Middleware
app.use(session(sessionConfig));
app.use(cookieParser()); //Do I need this? NOt sure
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

//  Declare routes
const food = require('./routes/food');
const feedback = require('./routes/feedback');
const register = require('./routes/register');
const reports = require('./routes/reports');
const options = require('./routes/options');
const category = require('./routes/category');
const location = require('./routes/location');
const type = require('./routes/type');
const login = require('./routes/login');

//  Connect routes
app.use('/food', food);
app.use('/feedback', feedback);
app.use('/reports', reports);
app.use('/options', options);
app.use('/category', category);
app.use('/location', location);
app.use('/type', type);
app.use('/login', login);
app.use('/register', register);
app.use('/admin', ensureAuthenticated);
app.use('/user-feedback', ensureAuthenticated);

//favicon
app.use(favicon(__dirname + '/public/assets/images/web-art/favicon.ico'));

//  Set up connection
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.use(ensureAuthenticated);

app.get('/admin', function (req, res) { // I don't understand what this is doing
  res.send('Access Granted.'); // Or this...
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(401);
  }
}

//  Connect to port
var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  console.log('Listening on port ' + server.address().port);
});
