'use strict';

module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
		firstName: DataTypes.STRING,
		surName: DataTypes.STRING
	}, {});

	return User;
};