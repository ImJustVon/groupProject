const mongoose = require('mongoose');

const optionSchema = {
  name: { type: String, required: true },
  modifier: { type: Number, required: true },
  type: { type: Object, required: true },
};

const Option = mongoose.model('Option', optionSchema);

module.exports = { Option, optionSchema };
