const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/dashboard');
    }
  );

  app.get('/api/logout', (req, res) => {
    console.log('logout');
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current', (req, res) => {
    res.send(req.user);
  });
};
