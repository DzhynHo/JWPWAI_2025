const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Статика (CSS и другие файлы)
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Главная
app.get('/', (req, res) => {
  res.send(`
    <link rel="stylesheet" href="/style.css">
    <h1>Memowy portal</h1>
    <ul>
      <li><a href="/meme-day">Meme dnia</a></li>
      <li><a href="/top-memes">Top memy</a></li>
      <li><a href="/create-meme">Stwórz własny mem</a></li>
    </ul>
  `);
});

// Подключение маршрутов
const memeDayRouter = require('./routes/memeDay');       
const topMemesRouter = require('./routes/topMemes')();   
const createMemeRouter = require('./routes/createMeme');

app.use('/meme-day', memeDayRouter);
app.use('/top-memes', topMemesRouter);
app.use('/create-meme', createMemeRouter);

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
