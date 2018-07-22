const express = require("express");
const router = express.Router();
const CitiesController = require("../сontrollers/cities.controller");

router
	.get("/", CitiesController.getCities)
	.get("/random", CitiesController.getRandomCity)
	.delete("/:id", CitiesController.removeCity)
	.post("/", CitiesController.insertCity)
	.put("/:id", CitiesController.insertUpdateCity);

module.exports = router;
