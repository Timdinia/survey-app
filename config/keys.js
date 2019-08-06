// Keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    // production - return the prod set of keys
    module.exports = require('./prod');
} else {
    // development - return the dev set of keys
    module.exports = require('./dev');
}

