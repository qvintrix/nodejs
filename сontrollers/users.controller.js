const users = require("../models/users.json");


class UsersController {

	static getUsers(req, res, next) {
		if (!users) {
			return next(new Error("Users are empty"));
		}
		res.status(200).json(users);
	}

}

module.exports = UsersController;