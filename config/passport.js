const passport = require('passport');
const twitterStrategy = require('./passport-twitter');
const facebookStrategy = require('./passport-facebook');
const localStrategy = require('./passport-local');
const googleStrategy = require('./passport-google');

const existingUser = require('../models/mock-user');


passport
	.use(twitterStrategy)
	.use(facebookStrategy)
	.use(googleStrategy)
	.use(localStrategy);

// used to serialize the user for the session
passport.serializeUser(function (user, cb) {
	cb(null, existingUser);
});

// used to deserialize the user
passport.deserializeUser(function (id, cb) {
	cb(err, existingUser);
});


module.exports = passport;
