const express = require("express");
const router = express.Router();
const validateSchema = require("../helpers/auth-validator");
const passport = require("../helpers/passport");
const AuthController = require("../сontrollers/auth.controller");

router
  .post("/", validateSchema("existing-user"), AuthController.auth)

  .get("/twitter", passport.authenticate("twitter"))

  .get("/twitter/callback", passport.authenticate("twitter"), (req, res) => {
    console.log(req);
    // Successful authentication
    res.send();
  })

  .get("/facebook", passport.authenticate("facebook"))

  .get("/facebook/callback", passport.authenticate("facebook"), (req, res) => {
    console.log(req);
    // Successful authentication
    res.send();
  })

  .get("/google", passport.authenticate("google", { scope: ["profile"] }))

  .get("/google/callback", passport.authenticate("google"), (req, res) => {
    // Successful authentication, redirect home.
    console.log(req);
    // Successful authentication
    res.send();
  })

  .post("/login", passport.authenticate("local"), (req, res) => {
    res.send(req.user);
  });

module.exports = router;
