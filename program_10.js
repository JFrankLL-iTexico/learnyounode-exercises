const net = require('net');

const PORT = process.argv[2];

net.createServer(socket => {
	var date = new Date();
	var Y = date.getYear();
	var M = date.getMonth()+1;
	var D = date.getDate();
	var h = date.getHours();
	var m = date.getMinutes();
	M = M.toString().length > 1 ? M : `0${M}`;
	D = D.toString().length > 1 ? D : `0${D}`;
	h = h.toString().length > 1 ? h : `0${h}`;
	m = m.toString().length > 1 ? m : `0${m}`;
	var result = `${1900+Y}-${M}-${D} ${h}:${m}\n`;
	socket.end(result);
}).listen(PORT);
