const express = require("express");
const app = express();

const routes = require("./routes");
const authRoute = require('./routes/auth');

const errorHandler = require("./middlewares/error-handler");
const queryParser = require("./middlewares/query-parser");
const cookieParser = require("./middlewares/cookie-parser");

app
	.use(express.json())
	.use(cookieParser)
	.use(queryParser)
	.use(errorHandler)
	.use("/api", routes)
	.use("/auth", authRoute);

module.exports = app;
