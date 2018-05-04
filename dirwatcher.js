const fs = require("fs");
const myEmitter = require("./my-emitter");

class DirWatcher {
  constructor(path, delay) {
    this.watch(path, delay);

    this.conditionObj = {};
    this.promiseArr = [];
  }

  readDir(path) {
    fs.readdir(path, (err, files) => {
      if (err) {
        throw err;
      }

      for (var index in files) {
        const fileArr = files[index].split(".");
        const filepath = `${path}/${files[index]}`;

        if (fileArr[fileArr.length - 1] === "csv") {

          if (!this.conditionObj[filepath]) {
            myEmitter.emit("changed", filepath);
            this.promiseArr.push(checkFileExists(filepath));
          }

        }
      }

      Promise.all(this.promiseArr).then(result => {
        for (let item of result) {
          // add new Item:
          if (!this.conditionObj[item.path]) {
            this.conditionObj[item.path] = item.mtime;
          }

          // check Item on mtime:
          if (this.conditionObj[item.path] !== item.mtime) {
            myEmitter.emit("changed", item.path);
          }
        }
      });
    });
  }

  watch(path, delay) {
    setInterval(() => {
      this.readDir(path);
    }, delay);
  }
}

function checkFileExists(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      
      resolve({
        path,
        mtime: stats.mtime.getTime()
      });
    });
  });
}

module.exports = DirWatcher;
