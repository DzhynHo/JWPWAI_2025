const express = require('express');
const router = express.Router();
const memes = require('../data/memes');

router.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * memes.length);
  const meme = memes[randomIndex];
  res.send(`
      <link rel="stylesheet" href="/style.css">
    <h1>Meme dnia</h1>
    <img src="${meme.url}" alt="Meme dnia" style="max-width:600px;">
    <p><a href="/">Powrót na główną</a></p>
    <button onclick="location.reload()">Losuj nowy mem</button>
  `);
});

module.exports = router;
