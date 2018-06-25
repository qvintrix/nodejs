const { User } = require('../models');

class UsersController {

	static getUsers(req, res, next) {
		User.findAll().then(users => {
			res.status(200).json(users);
		})
		.catch(error => {
			next(new Error(error.message));
		});
	}

}

module.exports = UsersController;