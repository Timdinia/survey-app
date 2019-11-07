const mongoose = require('mongoose');
const { Schema } = mongoose;
const Recipient = require('./Recipient');

const SurveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [Recipient],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'users' },
  dateSent: Date,
  lastResponded: Date,
});

module.exports = Survey = mongoose.model('Survey', SurveySchema);
