const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = ('../models/admin');

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
    User.findById(id).then(function(user){
      done(null, user);
    }).catch(function(err){
      done(err);
    });
  });
};

function findAndComparePassword (username, password, done) {
  // look up the user by their username
  User.findOne({ username: username }).then(function(user){
    if(!user) {
      //didn't find a user with the same username
      console.log('Failed to find user with username: ', username);
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
