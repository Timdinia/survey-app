const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', { scope: 'profile' })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
            // res.redirect('/');
            res.send(req.user);
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current', (req, res) => {
        console.log(req.user)
        res.send(req.user);
    });
};
