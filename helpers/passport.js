const passport = require("passport");
const twitterStrategy = require("../middlewares/passport-twitter");
const facebookStrategy = require("../middlewares/passport-facebook");
const localStrategy = require("../middlewares/passport-local");
const googleStrategy = require("../middlewares/passport-google");

const existingUser = require("../models/mock-user");

passport
  .use(twitterStrategy)
  .use(facebookStrategy)
  .use(googleStrategy)
  .use(localStrategy);

// Used to serialize the user for the session
passport.serializeUser((user, cb) => {
  cb(null, existingUser);
});

// Used to deserialize the user
passport.deserializeUser((id, cb) => {
  cb(null, existingUser);
});

module.exports = passport;
