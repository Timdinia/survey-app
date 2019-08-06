// Dependencies
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const cookieKey = require('./config/keys').cookieKey;
const db = require('./config/keys').mongoURI;
require('./services/passport');

// Initialise express server
const app = express();

// Load Models
const User = require('./models/User');

// App configuration
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        keys: [cookieKey],
    })
);

// Tell Passport to use cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

//Connect to MongoDB database
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Not connected to Database', err));

// Call the auth routes with the app object
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
    res.send('Home route');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server starded and listening on ${PORT}`));
