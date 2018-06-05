const server = require("http");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 3000;

server
  .createServer()
  .on("request", (req, res) => {
    const dirPath = path.resolve(__dirname);

    req.on("error", err => {
      console.log("error:" + err);
      res.statusCode = 404;
      res.end();
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
        res.statusCode = 404;
        res.end();
      });
  })
  .listen(port, () => {
    console.log(`App listening on port ${port}!`)
  });
