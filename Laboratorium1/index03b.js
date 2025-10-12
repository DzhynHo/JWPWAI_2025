const http = require('http');
const path = require("path");
const util = require("util");
const v8 = require("v8");

// На Render хост будет любой, а порт динамический
const hostname = '0.0.0.0';
const port = process.env.PORT || 8888;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, from node.js server!\n');
});

server.listen(port, hostname, () => {
  console.log(v8.getHeapStatistics());
  console.log(path.basename(__filename));
  console.log(path.join(__dirname, 'uploads', 'images'));
  console.log(`Server running at http://${hostname}:${port}/`);
});
