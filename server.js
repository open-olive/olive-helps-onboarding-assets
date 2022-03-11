const fs = require('fs');
const http = require('http');

const PORT = 2000;

http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      console.log(`[404] ${req.url} (${new Date().toLocaleString()})`);
      return;
    }
    res.writeHead(200);
    res.end(data);
    console.log(`[200] ${req.url} (${new Date().toLocaleString()})`);
  });
}).listen(PORT);

console.log(`Serving onboarding assets at http://localhost:${PORT}`);