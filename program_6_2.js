const fs = require('fs');

module.exports = (dirname, ext, cb) => {
	fs.readdir(dirname, (err, data) => {
		if(err) return cb(err);
		data = data.filter(elt => elt.split('.')[1] == ext);
		return cb(null, data);
	});
};
