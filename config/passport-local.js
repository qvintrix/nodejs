const LocalStrategy = require('passport-local').Strategy;
const existingUser = require('../models/mock-user');

module.exports = new LocalStrategy(
	{
		usernameField: 'login',
		passwordField: 'password'
	},
	(username, password, cb) => {

		if (username !== existingUser.username
			|| password !== existingUser.password) {
			return cb(null, false);
		}

		return cb(null, existingUser);
	}
);