const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('users', User);
