const express = require("express");
const router = express.Router();
const validateSchema = require('../helpers/auth-validator');
const config = require('../config/application.json');
const existingUser = require('../models/mock-user');
const jwt = require('jsonwebtoken');
const passport = require('../config/passport');

router
	.post("/", validateSchema('existing-user'), (req, res, next) => {
		const credentials = req.body;

		if (credentials.login !== existingUser.username
			|| credentials.password !== existingUser.password) {
			res.status(401).send({
				code: 401,
				success: false,
				message: 'bad username/password combination'
			});
			return;
		}

		const payload = { 'email': existingUser.email };
		const token = jwt.sign(payload, config.secret, { expiresIn: 10 });
		res.send({
			code: 200,
			message: "OK",
			data: {
				user: {
					email: existingUser.email,
					username: existingUser.username
				}
			},
			token
		});
	})

	.get('/twitter', passport.authenticate('twitter'))

	.get('/twitter/callback',
		passport.authenticate('twitter'), (req, res) => {
			console.log(req);
			// Successful authentication
			res.send();
		})

	.get('/facebook', passport.authenticate('facebook'))

	.get('/facebook/callback',
		passport.authenticate('facebook'), (req, res) => {
			console.log(req);
			// Successful authentication
			res.send();
		})

	.get('/google',
		passport.authenticate('google', { scope: ['profile'] }))

	.get('/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			// Successful authentication, redirect home.
			console.log(req);
			// Successful authentication
			res.send();
		})

	.post('/login',
		passport.authenticate('local'),
		(req, res) => {
			res.send(req.user);
		});

module.exports = router;