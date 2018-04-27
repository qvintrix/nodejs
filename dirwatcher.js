const fs = require("fs");
const myEmitter = require("./my-emitter");

class DirWatcher {
  constructor() {
    console.log("DirWatcher module");
    this.watch("./data", 1000);
  }

  readDir(path) {
    fs.readdir(path, (err, files) => {
      if (err) {
        throw err;
	  }
	  myEmitter.emit('changed', files);
	  console.log(files);
    //   for (var index in files) {
    //     console.log(files[index]);
    //   }
    });
  }

  watch(path, delay) {
    setInterval(() => {
      this.readDir(path);
    }, delay);
  }
}

module.exports = DirWatcher;
