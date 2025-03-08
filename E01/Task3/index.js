const http = require('http');
const fs = require('fs');
const { formatSystemInfo } = require('./systemUtils');

const server = http.createServer((req, res) => {
  if (req.url === '/data' && req.method === 'GET') {
    const uptime = process.uptime();
    const totalMemory = Math.round(process.memoryUsage().heapTotal / 1024 / 1024);
    const systemInfo = formatSystemInfo(uptime, totalMemory);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(systemInfo);
  } else if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./public/index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});