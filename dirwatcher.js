const myEmitter = require("./my-emitter");
const myHelper = require("./my-helper");
const config = require("./config");

class DirWatcher {
  constructor() {
    this.conditionObj = {};

    this._watch(config.path, config.delay);
  }

  _readDir(path) {
    myHelper.readDir(path)
      .then(files => {
        //For future cleaning deleted items in the Object:
        if (Object.keys(this.conditionObj).length) {
          for (let prop in this.conditionObj) {
            this.conditionObj[prop].exist = false;
          }
        }

        return files;
      })
      .then(files => {
        for (let file of files) {
          const filePath = `${path}/${file}`;
          if (!this.conditionObj[filePath]) {
            myEmitter.emit("changed", filePath); 1
          }

          this.conditionObj[filePath] = {
            name: file,
            exist: true
          };
        };

        this.objCleaner(this.conditionObj, 'exist');
      })
      .catch(err => {
        throw err;
      });
  }

  _watch(path, delay) {
    setInterval(() => {
      this._readDir(path);
    }, delay);
  }

  objCleaner(Obj, checkingProperty) {
    if (Object.keys(Obj).length) {
      for (let prop in Obj) {
        if (!Obj[prop][checkingProperty]) {
          delete Obj[prop];
        }
      }
    }
  }
}

module.exports = DirWatcher;
