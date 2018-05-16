const program = require("commander");
const colors = require("colors");

program.option("-a, --action", "Actions").option("-f, --file", "File info");
// error on unknown commands
// program.on("option:reverse", function() {
//   console.error(
//     "Invalid command: %s\nSee --help for a list of available commands."
//   );
//   process.exit(1);
// });

program.on("--help", function() {
  // Empty list of arguments:
  if (!process.argv.slice(2).length) {
    console.error("\n" + makeRedText("Wrong input data"));
  }
});
program.parse(process.argv);

// console.log(program);

// Empty list of arguments:
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

// if (program.reverse) reverse();

function reverse(str) {
  console.log("reverse");
}
function transform(str) {
  console.log("transform");
}
function outputFile(filePath) {
  console.log("outputFile");
}
function convertFromFile(filePath) {
  console.log("convertFromFile");
}
function convertToFile(filePath) {
  console.log("convertToFile");
}

function makeRedText(txt) {
  return colors.red(txt);
}
