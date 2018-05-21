const fs = require("fs");
const csvToJson = require("csvjson");
const colors = require("colors");

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

  static _filterFiles(files) {
    return files.filter(file => {
      const fileArr = file.split(".");

      return fileArr[fileArr.length - 1] === "css";
    });
  }

  static makeRedText(txt) {
    return colors.red(txt);
  }
}

module.exports = MyHelper;
