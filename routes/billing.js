const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const isAuth = require('../middlewares/isAuth');

module.exports = app => {
  app.post('/api/stripe', isAuth, async (req, res) => {
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
