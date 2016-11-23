const mongoose = require('mongoose');

const Search = mongoose.model('Search', {
  word: { type: String, required: true },
  count: { type: Number, required: true },
});

module.exports = Search;
