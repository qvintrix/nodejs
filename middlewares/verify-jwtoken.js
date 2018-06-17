var jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	let token = req.headers['x-access-token'];

	if (token) {
		jwt.verify(token, 'secret', (err) => {
			if (err) {
				res.json({ success: false, message: 'Failed to autenticate token.' });
				return;
			}
			next();
		})
	} else {
		res.status(403).send({ success: false, message: 'No token provided.' });
	}
}