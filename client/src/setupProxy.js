const proxy = require('http-proxy-middleware');

// Setup proxy for dev environnement 
module.exports = function(app) {
    app.use(
        proxy(['/api/current', '/auth/google'], { target: 'http://localhost:8000' })
    );
};
