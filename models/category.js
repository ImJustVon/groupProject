const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
  name: { type: String, required: true },
  imageLocation: { type: String, required: true },
});

module.exports = Category;
