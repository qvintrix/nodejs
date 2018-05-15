const program = require("commander");
console.dir(program);

program
  .option(
    "-r, --reverse",
    "reverse string data from process.stdin to process.stdout"
  )
  .option(
    "-t, --transform",
    "convert data from process.stdin to upper-cased data on process.stdout"
  )
  .option(
    "-o, --outputFile",
    "use fs.createReadStream() to pipe the given file provided by --file option to process.stdout"
  )
  .option(
    "-cff, --convertFromFile",
    "convert file provided by --file option from csv to json and output data to process.stdout"
  )
  .option(
    "-ctf, --convertToFile",
    "convert file provided by --file option from csv to json and output data to a result file with the same name but json extension. "
  )

// console.log(program);


program.on('--help', function(){
	console.log('');
  });
  program.parse(process.argv);

if (program.reverse) reverse();

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
