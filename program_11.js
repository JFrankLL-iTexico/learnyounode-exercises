const fs = require('fs');
const http = require('http');
const PORT = process.argv[2];
const FILEPATH = process.argv[3];

var server = http.createServer((req, res) => {
	req.setEncoding('utf8');
	var readStream = fs.createReadStream(FILEPATH);
	readStream.pipe(res);
});
server.listen(PORT);
