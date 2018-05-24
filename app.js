const express = require("express");
const app = express();

var bodyParser = require('body-parser')
const routes = require("./routes");


app.use(bodyParser.json())
app.use('/api', routes)
app.use('/api', routes)

module.exports = app;
