const TwitterStrategy = require('passport-twitter').Strategy;
const configAuth = require('./auth');
const existingUser = require('../models/mock-user');

module.exports = new TwitterStrategy({

	consumerKey: configAuth.twitterAuth.consumerKey,
	consumerSecret: configAuth.twitterAuth.consumerSecret,
	callbackURL: configAuth.twitterAuth.callbackURL

},
	(token, tokenSecret, profile, cb) => {

		console.log(profile);
		return cb(null, existingUser);
	})