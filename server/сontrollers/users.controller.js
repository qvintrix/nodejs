const { User } = require('../../models');

class UsersController {

	static getUsers(req, res, next) {
		User.findAll().then(users => {
			if (!users) {
				return next(new Error("Users are empty"));
			}
			res.status(200).json(users);
		});
	}

}

module.exports = UsersController;