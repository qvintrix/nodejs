const mongoose = require("mongoose");
const city = require("./city");
const user = require("./user");
const product = require("./product");
const config = require("../config/config");

mongoose.connect(`${config.dbConnection}/${config.dbName}`);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB success run");

  city.initMockData();
  user.initMockData();
  product.initMockData();
});