const myEmitter = require("./my-emitter");

class Importer {
  constructor() {
    myEmitter.on("changed", this.importCSVFiles);
  }

  importCSVFiles(file) {
    console.log(file);
  }
}

module.exports = Importer;
