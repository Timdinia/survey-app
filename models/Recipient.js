const mongoose = require('mongoose');
const { Schema } = mongoose;

const Recipient = new Schema({
  email: { type: String },
  responded: {
    type: Boolean,
    default: false,
  },
});

module.exports = Recipient;
