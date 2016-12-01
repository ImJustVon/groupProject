const mongoose = require('mongoose');

const Location = mongoose.model('Location', {
  name: { type: String, required: true },
  file: { type: Object, required: true },
});

module.exports = Location;
