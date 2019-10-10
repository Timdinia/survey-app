const mongoose = require('mongoose');
const { Schema } = mongoose;

const Recipient = new Schema({
  email: {
    type: String,
    unique: true,
  },
  responded: {
    type: Boolean,
    default: false,
  },
});
