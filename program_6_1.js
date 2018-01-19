const lister = require('./program_2');
lister(process.argv[2], process.argv[3], (err, data) => {
	if(err)
		console.log(err);
	for(var elt of data)
		console.log(elt);
});
