const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = ('../models/admin');

exports.setup = function() {
  // passport configuration

  passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, findAndComparePassword));

  // converts a user to a user id
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  // converts a user id to a user
  passport.deserializeUser(function(id, done){
    Admin.findById(id).then(function(user){
      done(null, user);
    }).catch(function(err){
      done(err);
    });
  });
};

function findAndComparePassword (username, password, done) {
  // look up the user by their username
  Admin.findOne({ username: username }).then(function(user){
    if(!user) {
      return done(null, false);
    }

    //compare password
    user.comparePassword(password).then(function(isMatch){
      if(isMatch) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }).catch(function(err){
    console.log('Error finding Administrative User', err);
  });
}
