const mongoose = require('mongoose');

const Food = mongoose.model('Food', {
  name: String,
  category: String,
  options: Array,
  score: Number,
  overRide: Boolean,
  overRideValue: String,
});

module.exports = Food;
