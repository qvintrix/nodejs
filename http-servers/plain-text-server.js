const server = require("http");
const port = process.env.PORT || 3000;

server
  .createServer()
  .on("request", (req, res) => {

    req.on("error", err => {
      console.log("error:" + err);
      res.statusCode = 404;
      res.end();
    });

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  })

  .listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });
