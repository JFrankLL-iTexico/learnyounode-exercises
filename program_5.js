var fs = require('fs');

fs.readdir(process.argv[2], (err, list) => {
	list = list.filter(elt => elt.split('.')[1] == process.argv[3]);
	for(var elt of list)
		console.log(elt);
});
