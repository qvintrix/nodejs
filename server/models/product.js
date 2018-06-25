'use strict';

module.exports = (sequelize, DataTypes) => {
	var Product = sequelize.define('Product', {
		name: DataTypes.STRING
	}, {});

	return Product;
};