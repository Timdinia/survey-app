const keys = require('../../config/keys');

module.exports = survey => {
  return `
  <html>
    <body>
      <div style="text-align: center;">
        <h3>Votre avis compte</h3>
        <p>Merci de prendre le temps de répondre à notre question 🙌</p>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/thankyou">Oui</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/thankyou">Non</a>
        </div>
      </div>
    </body>
  </html>
  `;
};
 