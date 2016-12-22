const mongoose = require('mongoose');
const bycrpt = require('bycrpt');
const SALT_ROUNDS = 10;

const adminSchema = new mongoose.Schema({
  username: String;
  password: String;
});

//Ensure that every new user's password is hashed(encrypted)
adminSchema.pre('save', function(done){
  const admin = this;

  bycrpt.hash(admin.password, SALT_ROUNDS, function(err, hash){
    if (err) {
      console.log('Error hashing password', err);
      return done(new Error('Error hashing password'));
    }

    admin.password = hash;
    done();
  });
});

adminSchema.methods.comparePassword = function(password) {
  const admin = this;

  return new Promise(function(resolve){
    bycrpt.compare(password, admin.password, function (err, match){
      if (err) {
        console.log('Error comparing password');
        return resolve(false);
      }

      resolve(match);
    });
  });
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
