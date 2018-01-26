var fs = require('fs');

fs.readdir(process.argv[2], (err, list) => {

	// using === is better than use ==
	list = list.filter(elt => elt.split('.')[1] == process.argv[3]);

	// it is highly recomended to use curly braces
	// sometimes if you minify the code you can get errors
	for(var elt of list)
		console.log(elt);
});
