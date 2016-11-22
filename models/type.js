const mongoose = require('mongoose');

const Type = mongoose.model('Type', {
  name: { type: String, validate: required },
  display: { type: String, validate: required },
});

module.exports = Type;
