const router = require('express').Router();
const User = require('../models/admin');

router.post('/', function(req, res){
  console.log('Registering a new admin...');
  const user = new User({username: req.body.username, password: req.body.password, role: req.body.role});
  console.log('New user registered: ', user);
  user.save().then(function(){
    res.sendStatus(201);
  }).catch(function(err){
    console.log('Error in /register', err);
    res.sendStatus(500);
  });
});

module.exports = router;
