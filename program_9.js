const http = require('http');
const bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var results = [];

for(var i=0; i<3; i++) {
	fetchData(i);
}

async function fetchData(i) {
	await http.get(urls[i], res =>
		res.pipe(bl((err, chunk) => {
			results[i] = chunk.toString();
			console.log(results[i]);
		}))
	);
}
