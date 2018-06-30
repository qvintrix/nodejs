const express = require("express");
const router = express.Router();
const UsersController = require("../сontrollers/users.controller");

router
  .get("/", UsersController.getUsers)
  .delete("/:id", UsersController.removeUser);

module.exports = router;
