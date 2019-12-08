const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: false
  }
});

const Quotes = mongoose.model('Quotes', QuoteSchema);

module.exports = Quotes;