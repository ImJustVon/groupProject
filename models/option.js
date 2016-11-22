const mongoose = require('mongoose');

const optionSchema = {
  name: { type: String, validate: required },
  modifier: { type: Number, validate: required },
  type: { type: Object, validate: required },
};

const Option = mongoose.model('Option', optionSchema);

module.exports = { Option, optionSchema };
