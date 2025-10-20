const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
      <link rel="stylesheet" href="/style.css">
    <h1>Stwórz własny mem</h1>
    <form method="POST" action="/create-meme">
      <label>Tekst górny:</label><br>
      <input type="text" name="topText"><br>
      <label>Tekst dolny:</label><br>
      <input type="text" name="bottomText"><br>
      <label>Wybierz szablon:</label><br>
      <select name="template">
        <option value="https://i.imgflip.com/30b1gx.jpg">Drake</option>
        <option value="https://www.giantfreakinrobot.com/wp-content/uploads/2023/10/lord-of-the-rings-council.jpg">The Lord</option>
        <option value="https://i.imgflip.com/26am.jpg">Man</option>
      </select><br><br>
      <button type="submit">Generuj mema</button>
    </form>
    <p><a href="/">Powrót na główną</a></p>
  `);
});

router.post('/', (req, res) => {
  const { topText, bottomText, template } = req.body;
  res.send(`
      <link rel="stylesheet" href="/style.css">
    <h1>Twój mem</h1>
    <div style="position: relative; display: inline-block; text-align: center;">
      <img src="${template}" style="max-width:600px;">
      <div style="position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
                  color: white; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px black;">
        ${topText}
      </div>
      <div style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);
                  color: white; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px black;">
        ${bottomText}
      </div>
    </div>
    <p><a href="/create-meme">Stwórz kolejny mem</a></p>
    <p><a href="/">Powrót na główną</a></p>
  `);
});

module.exports = router;
