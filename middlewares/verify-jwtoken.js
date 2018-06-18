const jwt = require('jsonwebtoken');
const config = require('../config/application.json');

module.exports = (req, res, next) => {
	let token = req.headers['x-access-token'];

	if (token) {
		jwt.verify(token, config.secret, (err) => {
			if (err) {
				res.json({ success: false, message: err.message });
				return;
			}
			next();
		})
	} else {
		res.status(401).send({ success: false, message: 'No token provided.' });
	}
}