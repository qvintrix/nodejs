const express = require("express");
const router = express.Router();
const products = require("../models/products.json");
const errorHandler = require("../middlewares/error-handler");
const queryParser = require("../middlewares/query-parser");
const cookieParser = require("../middlewares/cookie-parser");

router
  .get("/", (req, res, next) => {
    next();
    if (!products) {
      return next(new Error("Products are empty"));
    }

    res.json(products);
  })

  .get("/:id", (req, res, next) => {
    const productId = req.params.id;
    next();

    if (!products[productId]) {
      return next(new Error("Product with such ID is missing"));
    }

    res.json(products[productId]);
  })

  .get("/:id/reviews", (req, res, next) => {
    const productId = req.params.id;
    next();

    if (!products[productId]) {
      return next(new Error("Product with such ID is missing"));
    }
    res.json(products[productId].reviews);
  })

  .post("/", (req, res, next) => {
    next();

    if (!req.body) {
      return next(new Error("Did not pass any data for creating new product"));
    }

    const newProduct = {
      name: req.body.name,
      reviews: req.body.reviews
    };
    res.send(newProduct);
  })

  .use(cookieParser)
  .use(queryParser)
  .use(errorHandler);

module.exports = router;
