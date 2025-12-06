const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url === "/") {
        getTitles(res);
    } else {
        res.writeHead(404);
        res.end("Not found");
    }
}).listen(8000, "127.0.0.1");

function getTitles(res) {
    fs.readFile('./titles.json', (err, data) => {
        if (err) return hadError(err, res);
        const titles = JSON.parse(data.toString());
        getTemplate(titles, res);
    });
}

function getTemplate(titles, res) {
    fs.readFile('./template.html', (err, data) => {
        if (err) return hadError(err, res);
        formatHtml(titles, data.toString(), res);
    });
}

function formatHtml(titles, tmpl, res) {
    const html = tmpl.replace('%', titles.join('</li><li>'));
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
}

function hadError(err, res) {
    console.error(err);
    res.writeHead(500);
    res.end("Error");
}
