const fs = require('fs');
const through2 = require('through2');

class Actions {
	static reverse(str) {
		const tempArr = str.split('');
		const reversedArr = tempArr.reverse();
		console.log(reversedArr.join(''));
	}
	static transform(str) {
		console.log(str);
	}
	static outputFile(filePath) {
		fs.createReadStream(filePath)
			.pipe(process.stdout);
	}
	static convertFromFile(filePath) {
		console.log(filePath);
	}
	static convertToFile(filePath) {
		console.log(filePath);
	}
	static cssBundler(filePath) {
		console.log(filePath);
	}
}

module.exports = Actions;