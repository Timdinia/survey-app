module.exports = survey => {
  return `
  <html>
    <body>
      <div style="text-align: center;">
        <h3>Votre avis compte</h3>
        <p>Merci de prendre le temps de répondre à notre question 🙌</p>
        <p>${survey.body}</p>
        <div>
          <a href="#">Oui</a>
        </div>
        <div>
          <a href="#">Non</a>
        </div>
      </div>
    </body>
  </html>
  `;
};
