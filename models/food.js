const mongoose = require('mongoose');
const optionSchema = require('./option').optionSchema;

const Food = mongoose.model('Food', {
  name: { type: String, validate: required },
  category: { type: String, validate: required },
  options: [optionSchema],
  score: { type: Number, validate: required },
  overRide: Boolean,
  overRideValue: String,
  tags: Array,
  location: Array,
});

module.exports = Food;
