const express = require("express");
const router = express.Router();
const UsersController = require("../сontrollers/users.controller");

router
  .get("/", UsersController.getUsers);

module.exports = router;
