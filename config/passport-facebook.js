const FacebookStrategy = require('passport-facebook').Strategy;
const existingUser = require('../models/mock-user');
const configAuth = require('./auth');

module.exports = new FacebookStrategy({

	clientID: configAuth.facebookAuth.clientID,
	clientSecret: configAuth.facebookAuth.clientSecret,
	callbackURL: configAuth.facebookAuth.callbackURL

},
	(token, refreshToken, profile, cb) => {

		console.log(profile);
		return cb(null, existingUser);
	})