const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  googleId: String,
});

module.exports = mongoose.model('users', User);
