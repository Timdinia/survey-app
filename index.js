// Dependencies
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const cookieKey = require('./config/keys').cookieKey;
const db = require('./config/keys').mongoURI;
require('./models/User');
require('./models/Survey');
require('./services/passport');

// Load express server
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    keys: [cookieKey],
  })
);

// Set Passport to use cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Not connected to Database', err));

// Load routes
require('./routes/auth')(app);
require('./routes/billing')(app);

// Serve production assets
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html '));
  });
}

// Test route
app.get('/', (req, res) => {
  res.send('Test route');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server starded and listening on ${PORT}`));
