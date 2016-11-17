const mongoose = require('mongoose');
const optionSchema = require('./option').optionSchema;

const Food = mongoose.model('Food', {
  name: String,
  category: String,
  options: [optionSchema],
  score: Number,
  overRide: Boolean,
  overRideValue: String,
  tags: Array,
});

module.exports = Food;
