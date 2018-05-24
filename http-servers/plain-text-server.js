const server = require("http");

server.createServer().on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
})
.listen(3000);
