require('dotenv/config');
const express = require('express');
const cors = require('cors');
const { join } = require('path');
const { login } = require('./controllers/auth.controller');

const PORT = process.env.CUSTOM_PORT || 8000;
const app = express();
app.use(cors());

app.use(express.json());

app.get('/api', (req, res) => {
  res.send(`Hello, this is my API`);
});

app.get('/api/users', login);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
  } else {
    console.log(`APP RUNNING at ${PORT} ✅`);
  }
});
