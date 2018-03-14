const http = require('http');
const generatePosts = require('./dataModule')
const hostname = '127.0.0.1';
const port = 3010;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

	const posts = generatePosts(10);

	res.end(JSON.stringify(posts));
});

server.listen(port, hostname, () => {
	console.log('Server running at http://' + hostname + ':' + port + '/');
});
