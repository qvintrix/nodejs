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
      // myEmitter.emit('changed', files);

      // if (files.length) {
      //   // console.log(`${path}/${files[0]}`);
      // fs.stat(`${path}/${files[0]}`, (err, stats) => {
      //   console.log(stats.mtime.getTime());
      // })
      // }
      for (var index in files) {
        checkFileExists(`${path}/${files[index]}`, this.conditionObj)
          .then(res => console.log(res))
        // console.log(files[index]);
        // this.conditionObj[`${path}/${files[index]}`] = checkFileExists(`${path}/${files[index]}`);
        // this.conditionObj.push(checkFileExists(`${path}/${files[index]}`, this.conditionObj));
        // this.conditionObj[`${path}/${files[index]}`] = checkFileExists(`${path}/${files[index]}`, this.conditionObj);
        // fs.stat(`${path}/${files[index]}`, (err, stats) => {
        //   // console.log(stats.mtime.getTime());
        //   // console.log(files[index]);
        //   this.conditionObj[`${path}/${files[index]}`] = stats.mtime.getTime()
        // })
      }

      // Promise.resolve(this.conditionObj)
      //   .then(result => {
      //     console.log(result);
      //   })

      // console.log(this.conditionObj);
    });
  }

  watch(path, delay) {
    setInterval(() => {
      this.readDir(path);
    }, delay);
  }
}

function checkFileExists(path, conditionObj) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      // console.log(conditionObj)
      // console.log(path)
      resolve(
        conditionObj[path] = stats.mtime.getTime()
      );
    });
  });
}

module.exports = DirWatcher;
