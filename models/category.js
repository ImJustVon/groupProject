const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
  name: { type: String, validate: required },
});

module.exports = Category;
