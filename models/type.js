const mongoose = require('mongoose');

const Type = mongoose.model('Type', {
  name: { type: String, required: true },
  display: { type: String, required: true },
});

module.exports = Type;
