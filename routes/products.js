const express = require("express");
const router = express.Router();
const ProductsController = require("../сontrollers/products.controller");

router
  .get("/", ProductsController.getProducts)
  .get("/:id", ProductsController.getProduct)
  .post("/", ProductsController.insertProduct)
  .delete("/:id", ProductsController.removeProduct);

module.exports = router;
