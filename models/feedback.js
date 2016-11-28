const mongoose = require('mongoose');

const FeedBack = mongoose.model('FeedBack', {
  type: { type: String, required: true },
  content: { type: String, required: true },
  date: Date,
  resolved: Boolean,
});

module.exports = FeedBack;
