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

  .listen(port, () => {
    console.log(`App listening on port ${port}!`)
  });
