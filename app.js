const express = require("express");
const app = express();
const routes = require("./routes");
const swaggerUI = require('swagger-ui-express');
const yaml = require('yamljs');

const errorHandler = require("./middlewares/error-handler");
const swaggerDocument = yaml.load('./swagger.yaml');

require("./models/index");
app
	.use(express.json())
	.use(express.urlencoded({ extended: false }))
	.use(errorHandler)

	.use(
		'/docs',
		swaggerUI.serve,
		swaggerUI.setup(swaggerDocument)
	)
	.use("/api", routes);


module.exports = app;
