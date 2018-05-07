const myEmitter = require("./my-emitter");
const fs = require("fs");
const myHelper = require("./my-helper");

class Importer {
  constructor() {
    this._onInit();
  }

  _onInit() {
    myEmitter.on("changed", path => {
      this._importAsync(path)
        .then(data => console.log(data))
        .catch(error => {
          throw error;
        });

      // Sync case:
      // console.log(this._importSync(path));
    });
  }

  _importAsync(path) {
    return myHelper.readFileAsync(path);
  }

  _importSync(path) {
    return myHelper.readFileSync(path);
  }
}

module.exports = Importer;
