const User = require('../models/user');


class UsersController {

	static getUsers(req, res, next) {
		User.find((err, users) => {
			if (err) return next(err);

			res.status(200).json(users.map(user => ({
				_id: user._id,
				firstName: user.firstName,
				surName: user.surName
			})));
		});
	}

	static removeUser(req, res, next) {
		User.findByIdAndRemove(req.params.id, (err, user) => {
			if (err) return next(err);

			if (user) {
				res.sendStatus(200);
			} else {
				res.sendStatus(404);
			}
		});
	}
}

module.exports = UsersController;