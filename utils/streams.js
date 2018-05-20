const colors = require("colors");
const actions = require('./actions');
const argv = require("yargs")
  .option('action', {
    alias: "a",
    describe: "Actions",
    demandOption: true
  })
  .option('file', {
    alias: "f",
    describe: "File path",
  })
  .alias('h', 'help')
  .alias('v', 'version')
  .help('help')
  .usage('Usage: $0 -a [action] [options]')
  .argv;

const action = argv.action;
console.log(argv);
// console.log(argv._[0]);

switch (action) {
  case 'reverse':
    if (!argv._[0]) {
      console.log('string should be set');
      return;
    }
    actions.reverse(
      argv._[0]);
    break;
  case 'transform':
    if (!argv._[0]) {
      console.log('string should be set');
      return;
    }
    actions.transform(
      argv._[0]);
    break;
  case 'outputFile':
    actions.outputFile(
      argv.file);
    break;
  case 'convertFromFile':
    actions.convertFromFile(
      argv.file);
    break;
  case 'convertToFile':
    actions.convertToFile(
      argv.file);
    break;
  case 'cssBundler':
    actions.cssBundler(
      argv.path);
    break;
}

function makeRedText(txt) {
  return colors.red(txt);
}
