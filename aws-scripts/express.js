const express = require('express');
const app = express();

app.use('/', express.static('/'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

module.exports = app; // export your app so aws-serverless-express can use it
