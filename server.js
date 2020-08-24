const express = require('express');
const path = require('path');
const config = require('./config');

const app = express();

// Static files
app.use('/', express.static('build'));
// Routes
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = app.listen(config.port, () => {
  console.log(`Listening http://localhost:${server.address().port}`);
});
