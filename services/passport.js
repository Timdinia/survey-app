// Dependencies
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('../config/keys');

// Load Model
const User = require('../models/User');

// Serialize user
passport.serializeUser((user, done) => {
    console.log('serializing user');
    console.log(user.id);
    done(null, user.id);
});

// Deserialize user
passport.deserializeUser((id, done) => {
    console.log('deserialize user');
    console.log(id);
    User.findById(id, (err, user) => {
        if (err) {
            console.error(err);
            done(null, false);
        }
        done(null, user);
    });
});

// Google strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.GOOGLE_CLIENT_ID,
            clientSecret: keys.GOOGLE_CLIENT_SECRET,
            callbackURL: keys.GOOGLE_CALLBACK_URL,
            proxy: true,
        },
        function(accessToken, refreshToken, profile, done) {
            // Check if User exists
            User.findOne({ googleId: profile.id }).then(user => {
                if (user) {
                    return done(null, user);
                }
                // If not create a new User
                User.create({ googleId: profile.id })
                    .then((err, user) => {
                        if (user) {
                            return done(null, user);
                        }
                        return done(null, false);
                    })
                    .catch(err => console.error(err));
            });
        }
    )
);
