const myHelper = require("./my-helper");
const actions = require("./actions");

const argv = require("yargs")
  .option("action", {
    alias: "a",
    describe: "Actions",
    demandOption: true
  })
  .option("file", {
    alias: "f",
    describe: "File path"
  })
  .option("path", {
    alias: "p",
    describe: "File path"
  })
  .alias("h", "help")
  .alias("v", "version")
  .help("help")
  .usage("Usage: $0 -a [action] [options]").argv;

checkAction(argv.action, argv);

function checkAction(action, argv) {
  switch (action) {
    case "reverse":
      if (!argv._[0]) {
        throw Error(MyHelper.makeRedText("Argument is invalid"));
      }
      actions.reverse(argv._[0]);
      break;
    case "transform":
      if (!argv._[0]) {
        throw Error(MyHelper.makeRedText("Argument is invalid"));
      }
      actions.transform(argv._[0]);
      break;
    case "outputFile":
      actions.outputFile(argv.file);
      break;
    case "convertFromFile":
      actions.convertFromFile(argv.file);
      break;
    case "convertToFile":
      actions.convertToFile(argv.file);
      break;
    case "cssBundler":
      actions.cssBundler(argv.path);
      break;
  }
}
