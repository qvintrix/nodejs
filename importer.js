const myEmitter = require("./my-emitter");
const csvToJson = require('convert-csv-to-json');

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
    });
  }

  _importAsync(path) {
    return new Promise((resolve, reject) => {
      try {
        resolve(csvToJson.getJsonFromCsv(path));
      } catch (err) {
        reject(err);
      }
    });
  }

  _importSync(path) {
    try {
      return csvToJson.getJsonFromCsv(path);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Importer;
