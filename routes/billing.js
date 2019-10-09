const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    // check for user
    if (!req.user) {
      res.status(401).send({ error: 'Unauthorized' });
    }
    // charge the  user
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5$ for 5 crédits',
      source: req.body.id,
    });
    // add credits to the user and persist the changes
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
