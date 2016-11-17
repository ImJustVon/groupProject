const mongoose = require('mongoose');

const optionSchema = {
  name: String,
  score: Number,
  type: String,
};

const Option = mongoose.model('Option', optionSchema);

module.exports = { Option, optionSchema };
