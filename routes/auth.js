const express = require("express");
const router = express.Router();
const validateSchema = require('../helpers/auth-validator');

var jwt = require('jsonwebtoken');

const existingUser = {
	username: 'user',
	email: 'user@gmail.com',
	password: 12345
}

router
	.post("/", validateSchema('existing-user'), (req, res, next) => {
		const credentials = req.body;

		if (credentials.login !== existingUser.username
			|| credentials.password !== existingUser.password) {
			res.status(404).send({
				code: 404,
				success: false,
				message: 'bad username/password combination'
			});
			return;
		}

		const payload = { 'email': existingUser.email };
		const token = jwt.sign(payload, 'secret', { expiresIn: 10 });
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
	});

module.exports = router;