const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
  name: String,
});

module.exports = Category;
