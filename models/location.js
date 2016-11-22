const mongoose = require('mongoose');

const Location = mongoose.model('Location', {
  name: { type: String, validate: required },
});

module.exports = Location;
