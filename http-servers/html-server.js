const server = require("http");
const fs = require("fs");
const path = require("path");

server
  .createServer()
  .on("request", (req, res) => {
    const dirPath = path.resolve(__dirname);

    req.on("error", err => {
      console.log("error:" + err);
      response.statusCode = 404;
      response.end();
    });

    fs
      .createReadStream(dirPath + "/index.html")
      .on("data", chunk => {
        res.setHeader("Content-Type", "text/html");
        res.write(chunk);
      })
      .on("end", () => {
        res.end();
      })
      .on("error", err => {
        console.log("error:" + err);
        response.statusCode = 404;
        response.end();
      });
  })
  .listen(3000);
