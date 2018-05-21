const fs = require("fs");
const path = require("path");
const through2 = require("through2");
const csvToJson = require("csvjson");
const myHelper = require("./my-helper");

class Actions {
  static reverse(str) {
    const tempArr = str.split("");
    const reversedArr = tempArr.reverse();
    process.stdout.write(reversedArr.join(""));
  }

  static transform(str) {
    process.stdout.write(str.toUpperCase());
  }

  static outputFile(filePath) {
    fs.createReadStream(filePath).pipe(process.stdout);
  }

  static convertFromFile(filePath) {
    const stream = csvToJson.stream;
    const toObject = stream.toObject({ delimiter: ";" });
    const stringify = stream.stringify();

    fs
      .createReadStream(filePath)
      .pipe(toObject)
      .pipe(stringify)
      .pipe(process.stdout);
  }

  static convertToFile(filePath) {
    const extension = path.extname(filePath);
    const fileName = path.basename(filePath, extension);
    const dirName = path.dirname(filePath);
    const fullPath = path.join(dirName, `${fileName}.json`);

    const stream = csvToJson.stream;
    const toObject = stream.toObject({ delimiter: ";" });
    const stringify = stream.stringify();
    const writeStream = fs.createWriteStream(fullPath);

    fs
      .createReadStream(filePath)
      .pipe(toObject)
      .pipe(stringify)
      .pipe(writeStream);
  }

  static cssBundler(filePath) {
    const bundlePathCss = path.join(filePath, "bundle.css");

    myHelper.readDir(filePath).then(files => {
      const writeStream = fs.createWriteStream(bundlePathCss);

      for (let file of files) {
        const cssPath = path.join(filePath, file);
        fs.createReadStream(cssPath).pipe(writeStream);
      }
    });
  }
}

module.exports = Actions;
