const mongoose = require('mongoose');

const optionSchema = {
  name: String,
  modifier: Number,
  type: Object,
};

const Option = mongoose.model('Option', optionSchema);

module.exports = { Option, optionSchema };
