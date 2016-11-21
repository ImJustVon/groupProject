const mongoose = require('mongoose');

const Location = mongoose.model('Location', {
  name: String,
});

module.exports = Location;
