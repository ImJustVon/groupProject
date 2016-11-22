const mongoose = require('mongoose');
const optionSchema = require('./option').optionSchema;

const Food = mongoose.model('Food', {
  name: { type: String, required: true },
  category: { type: String, required: true },
  options: [optionSchema],
  score: { type: Number, required: true },
  overRide: Boolean,
  overRideValue: String,
  tags: Array,
  location: Array,
});

module.exports = Food;
