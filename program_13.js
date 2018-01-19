const http = require('http');
const url = require('url');

http.createServer((req, res) => {
	var urlobj = url.parse(req.url, true);
	var query = urlobj.query;

	var date = new Date(query.iso);
	
	var obj = (urlobj.pathname === '/api/parsetime') ? {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds() 
	} : {
		unixtime: date.getTime()
	};

	res.write(JSON.stringify(obj));
	res.end();
}).listen(Number(process.argv[2]));
