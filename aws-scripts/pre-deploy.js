const fs = require('fs');
const { resolve } = require('path');

fs.copyFile(
  resolve('./aws-scripts/express.js'),
  resolve('./build/express.js'),
  err => {
    if (err) throw err;
    console.log('file copied');
  },
);

fs.copyFile(
  resolve('./aws-scripts/express.local.js'),
  resolve('./build/express.local.js'),
  err => {
    if (err) throw err;
    console.log('file copied');
  },
);
