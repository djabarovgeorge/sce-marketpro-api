const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db/index.js');
const notesRoute = require('./routes/notes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());

//Middleware - Import routers
app.use('/notes', notesRoute);

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

db.connect().then(() => {
  app.listen(PORT, () => {
  });
});

module.exports = app;
