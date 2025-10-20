const express = require('express');
const memes = require('../data/memes');

function topMemesRouter() {
  const router = express.Router();

  router.get('/', (req, res) => {
    let html = '<h1>Top memy</h1>';
    memes.forEach((meme) => {
      html += `
        <div style="margin-bottom:20px;">
          <h3>${meme.title}</h3>
          <a href="${meme.url}" target="_blank">
            <img src="${meme.url}" alt="${meme.title}" style="width:200px;">
          </a>
        </div>
      `;
    });
    html += '<p><a href="/">Powrót na główną</a></p>';
    res.send(html);
  });

  return router;
}

module.exports = topMemesRouter;
