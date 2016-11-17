const mongoose = require('mongoose');

const Option = mongoose.model('Option', {
  name: String,
  score: Number,

});
