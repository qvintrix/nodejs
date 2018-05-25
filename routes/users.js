const express = require("express");
const router = express.Router();
const users = require("../models/users.json");
const errorHandler = require("../middlewares/error-handler");

router
  .get("/", (req, res) => {
    res.json(users);
  })

  .use(errorHandler);

module.exports = router;
