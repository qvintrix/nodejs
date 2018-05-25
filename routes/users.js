const express = require("express");
const router = express.Router();
const users = require("../models/users.json");
const errorHandler = require("../middlewares/error-handler");
const queryParser = require("../middlewares/query-parser");
const cookieParser = require("../middlewares/cookie-parser");

router
  .get("/", (req, res, next) => {
    next();
    res.json(users);
  })

  .use(cookieParser)
  .use(queryParser)
  .use(errorHandler);

module.exports = router;
