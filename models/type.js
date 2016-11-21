const mongoose = require('mongoose');

const Type = mongoose.model('Type', {
  name: String,
  display: String,
});

module.exports = Type;
