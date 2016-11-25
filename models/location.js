const mongoose = require('mongoose');

const Location = mongoose.model('Location', {
  name: { type: String, required: true },
  imageLocation: { type: String, required: true },
});

module.exports = Location;
