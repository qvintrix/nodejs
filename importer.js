const myEmitter = require("./my-emitter");

class Importer {
  constructor() {
    myEmitter.on("changed", this.importCSVFiles);
  }

  importCSVFiles() {
    console.log("import");
  }
}

module.exports = Importer;
