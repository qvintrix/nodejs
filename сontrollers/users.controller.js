const User = require('../models/user');


class UsersController {

	static getUsers(req, res, next) {
		User.find((err, users) => {
			if (err) next(new Error(err.message));

			res.status(200).json(users);
		});
	}

	static removeUser(req, res, next) {
		User.findByIdAndRemove(req.params.id, (err, user) => {
			if (err) next(new Error(err.message));

			if (user) {
				res.sendStatus(200);
			} else {
				res.sendStatus(404);
			}
		});
	}
}

module.exports = UsersController;