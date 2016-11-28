const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
  name: { type: String, required: true },
  created: Date,
  file: Object,
});

module.exports = Category;
