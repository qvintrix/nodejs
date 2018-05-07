const fs = require("fs");

class MyHelper {
	static readDir(path) {
		return new Promise((resolve, reject) => {
			fs.readdir(path, (err, files) => {
				if (err) {
					reject(err);
				}

				resolve(this._filterFiles(files));
			});
		});
	}

	static _filterFiles(files) {
		return files.filter(file => {
			const fileArr = file.split(".");

			return fileArr[fileArr.length - 1] === "csv";
		});
	}
}

module.exports = MyHelper;