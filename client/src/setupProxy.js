const proxy = require('http-proxy-middleware');

// Setup proxy for dev environnement
module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:8000',
      changeOrigin: true
    })
  );
};
/*
[
  '/api/current',
  '/api/logout',
  '/auth/google',
  '/api/stripe',
  '/api/surveys'
]
*/
