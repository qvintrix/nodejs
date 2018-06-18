const GoogleStrategy = require('passport-google-oauth20').Strategy;
const existingUser = require('../models/mock-user');
const configAuth = require('./auth');

module.exports = new GoogleStrategy({

	clientID: configAuth.googleAuth.clientID,
	clientSecret: configAuth.googleAuth.clientSecret,
	callbackURL: configAuth.googleAuth.callbackURL

},
	(token, refreshToken, profile, cb) => {

		console.log(profile);
		return cb(null, existingUser);
	})