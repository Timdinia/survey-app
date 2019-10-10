const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const requireAuth = require('../middlewares/requireAuth');
const requireCredits = require('../middlewares/requireCredits');

module.exports = app => {
  app.post('api/surveys', requireAuth, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })), // convert list of emails separated by commas and spaces   => to array of objects
      _user: req.user.id,
      dateSent: Date.now(),
    });
  });
};
