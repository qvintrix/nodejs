const server = require("http");

server
  .createServer()
  .on("request", (req, res) => {
    
    req.on("error", err => {
      console.log("error:" + err);
      response.statusCode = 404;
      response.end();
    });

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  })
  .listen(3000);
