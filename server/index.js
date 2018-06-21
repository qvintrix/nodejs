const express = require("express");
const app = express();
const routes = require("./routes");

const errorHandler = require("./middlewares/error-handler");

app
	.use(express.json())
	.use(express.urlencoded({ extended: false }))
	.use(errorHandler)

	.use("/api", routes)

module.exports = app;
