const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const memes = [
    { url: 'https://tse2.mm.bing.net/th/id/OIP.Gp9qs4D38lfCp3Lyo4SvbAHaGF?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', title: 'Absolute Cinema' },
    { url: 'https://2a18.com/wp-content/uploads/2021/12/memes.jpg', title: 'Cat' },
    { url: 'https://i.pinimg.com/originals/0e/0d/35/0e0d35caeea890421b2ae0e56614b8e9.jpg', title: 'Edward' },
    { url: 'https://i.pinimg.com/736x/92/60/a5/9260a5f97f1cfb597a03ed981c2ad688.jpg', title: 'Pikachu' }
];

app.get('/', (req, res) => {
    res.send(`
        <h1>Memowy portal</h1>
        <ul>
            <li><a href="/meme-day">Meme dnia</a></li>
            <li><a href="/top-memes">Top memy</a></li>
            <li><a href="/create-meme">Stwórz własny mem</a></li>
        </ul>
    `);
});

app.get('/meme-day', (req, res) => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const meme = memes[randomIndex];
    res.send(`
        <h1>Meme dnia</h1>
        <img src="${meme.url}" alt="Meme dnia" style="max-width:600px;">
        <p><a href="/">Powrót na główną</a></p>
        <button onclick="location.reload()">Losuj nowy mem</button>
    `);
});

app.get('/top-memes', (req, res) => {
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

app.get('/create-meme', (req, res) => {
    res.send(`
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

app.post('/create-meme', (req, res) => {
    const { topText, bottomText, template } = req.body;

    res.send(`
        
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

app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
