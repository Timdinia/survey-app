const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const Survey = require('../models/Survey');
const requireAuth = require('../middlewares/requireAuth');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
  app.get('/api/surveys', async (req, res) => {
    const surveys = await Survey.find({ _user: req.user._id }).select({
      recipients: false,
    });

    res.send(surveys);
  });

  app.post('/api/surveys', requireAuth, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })), // convert list of emails separated by commas and spaces => to an array of objects
      _user: req.user.id,
      dateSent: Date.now(),
    });
    // Initialize new Mailer instance with the survey data
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      const isSurvey = await Survey.findOne({ title });
      // Check if survey exists
      if (isSurvey) {
        res.status(400).json({ msg: 'Sondage déjà présent' });
      } else {
        // Send email
        await mailer.send();
        // Persist the new survey
        await survey.save();
        // Debit a credit
        req.user.credits -= 1;
        // Update the user record
        const user = await req.user.save();
        // Send response back
        res.status(200).send({ user });
      }
    } catch (err) {
      console.error(err).send({ error: 'Internal server error' });
    }
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Merci pour votre avis !');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice');

    _.chain(req.body)
      .map(({ email, url }) => {
        if (!url) {
          return res.status(400).json({ error: 'No url provided' });
        } else {
          const match = p.test(new URL(url).pathname); // Extract the path from the url
          if (match) {
            return {
              email,
              surveyId: match.surveyId,
              choice: match.choice,
            };
          }
        }
      })
      .compact()
      .uniqBy('email', 'url', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: { $elemMatch: { email: email, responded: false } },
          },
          {
            $inc: { [choice]: 1 },
            $set: { 'recipients.$.responded': true },
            lastResponded: new Date(),
          }
        ).exec();
      })
      .value();
  });
};
