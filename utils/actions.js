const fs = require("fs");
const path = require("path");
const through2 = require("through2");
const csvToJson = require("csvjson");
const myHelper = require("./my-helper");

class Actions {
  static reverse(str) {
    const reversed = str
      .toString()
      .split("")
      .reverse()
      .join("");
    process.stdout.write(reversed);
  }

  static reverseWithStdin() {
    const stream = through2({ objectMode: true }, (chunk, enc, callback) => {
      const reversed = chunk
        .toString()
        .split("")
        .reverse()
        .join("");
      callback(null, reversed);
    });


    process.stdin
      .pipe(stream)
      .pipe(process.stdout)
  }

  static transform(str) {
    process.stdout.write(str.toUpperCase());
  }

  static transformWithStdin() {
    const stream = through2({ objectMode: true }, (chunk, enc, callback) => {
      const string = chunk.toString();
      const result = string.toUpperCase();
      callback(null, result);
    });

    process.stdin
      .pipe(stream)
      .pipe(process.stdout)
  }

  static outputFile(filePath) {
    fs.createReadStream(filePath)
      .on('error', (err) => {
        console.log('error:' + err);
        process.exit(1);
      })
      .pipe(process.stdout);
  }

  static convertFromFile(filePath) {
    const stream = csvToJson.stream;
    const toObject = stream.toObject({ delimiter: ";" });
    const stringify = stream.stringify();

    fs.createReadStream(filePath)
      .on('error', (err) => {
        console.log('error:' + err);
        process.exit(1);
      })
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
      .on('error', (err) => {
        console.log('error:' + err);
        process.exit(1);
      })
      .pipe(toObject)
      .pipe(stringify)
      .pipe(writeStream);
  }

  static cssBundler(filePath) {
    const bundlePathCss = path.join(filePath, "bundle.css");

    myHelper.readDir(filePath).then(files => {
      const writeStream = fs.createWriteStream(bundlePathCss);
      const specialFileIndex = files.indexOf("nodejs-homework3.css");
      const lastIndexItem = files.length - 1;

      if (lastIndexItem !== specialFileIndex) {
        const cuted = files.splice(specialFileIndex, 1);
        files = files.concat(cuted);
      }

      for (let file of files) {
        const cssPath = path.join(filePath, file);
        fs.createReadStream(cssPath)
          .on('error', (err) => {
            console.log('error:' + err);
            process.exit(1);
          })
          .pipe(writeStream);
      }
    });
  }
}

module.exports = Actions;
