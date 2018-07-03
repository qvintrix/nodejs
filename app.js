const express = require("express");
const app = express();
const routes = require("./routes");

const errorHandler = require("./middlewares/error-handler");
require("./models/index");
require('./models/native-connection');
app
	.use(express.json())
	.use(express.urlencoded({ extended: false }))
	.use(errorHandler)

	.use("/api", routes);


module.exports = app;
