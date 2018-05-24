const server = require("http");
const fs = require("fs");
const path = require("path");

server
  .createServer()
  .on("request", (req, res) => {
    const dirPath = path.resolve(__dirname);
    fs.createReadStream(dirPath + "/index.html").pipe(res);

    //   res.writeHead(200, { "Content-Type": "text/html" });
  })
  .listen(3000);
