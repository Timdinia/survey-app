const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const requireAuth = require('../middlewares/requireAuth');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
  app.get('/api/surveys/thankyou', (req, res) => {
    res.send('Merci pour votre avis !');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    console.log(req.body);
    res.send({});
  });

  app.post('/api/surveys', requireAuth, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })), // convert list of emails separated by commas and spaces   => to array of objects
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // Send email
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();

      await survey.save();

      req.user.credits -= 1;

      const user = await req.user.save();

      res.status(200).send({ user });
    } catch (err) {
      console.error(err).send({ error: 'Internal server error' });
    }
  });
};
