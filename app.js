const DirWatcher = require("./dirwatcher");
const Importer = require("./importer");


new DirWatcher("./data", 1000);
new Importer();