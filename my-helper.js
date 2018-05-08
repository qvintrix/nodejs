const fs = require("fs");
const csvToJson = require('csvjson');

class MyHelper {
	static readDir(path) {
		return new Promise((resolve, reject) => {
			fs.readdir(path, (err, files) => {
				if (err) {
					reject(err);
				}

				resolve(MyHelper._filterFiles(files));
			});
		});
	}

	static readFileAsync(path) {
		return new Promise((resolve, reject) => {
			fs.readFile(path, "utf8", (err, data) => {
				if (err) {
					reject(err);
				}

				const options = { delimiter : ',' };
				const jsonObj = csvToJson.toObject(data, options);

				resolve(jsonObj);
			});
		});
	}

	static readFileSync(path) {
		try {
			const options = { delimiter : ',' };
			const data = fs.readFileSync(path, 'utf8');
			const jsonObj = csvToJson.toObject(data, options);
			return jsonObj;
		} catch (err) {
			throw err;
		}
	}

	static _filterFiles(files) {
		return files.filter(file => {
			const fileArr = file.split(".");

			return fileArr[fileArr.length - 1] === "csv";
		});
	}
}

module.exports = MyHelper;