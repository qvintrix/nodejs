const server = require("http");

server
  .createServer()

  .on("request", (req, res) => {
    req.on("error", err => {
      console.log("error:" + err);
      response.statusCode = 404;
      response.end();
    });

    res.setHeader("Content-Type", "application/json");

    const product = {
      id: 1,
      name: "Supreme T-Shirt",
      brand: "Supreme",
      price: 99.99,
      options: [{ color: "blue" }, { size: "XL" }]
    };

    res.end(JSON.stringify(product));
  })
  .listen(3000);
