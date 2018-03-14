const http = require('http');
const {getOutput} = require('./figletApp')
const hostname = '127.0.0.1';
const port = 3010;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  let outputText = getOutput();
  res.end(outputText);
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});
