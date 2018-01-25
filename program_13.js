const http = require('http');
const url = require('url');

http.createServer((req, res) => {
	var urlobj = url.parse(req.url, true);
	var query = urlobj.query;

	var date = new Date(query.iso);
	
	// ternary operator is well used for value assign
	// for block of codes it's better to use a common if/else
	// may you can declare the object as a separated value

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
