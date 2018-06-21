const { Product } = require('../models');

class ProductsController {

	static getProducts(req, res, next) {
		Product.findAll().then(products => {
			if (!products) {
				return next(new Error("Products are empty"));
			}

			res.status(200).json(products);
		});
	}

	static getProduct(req, res, next) {
		Product.findOne({
			where: {
				id: req.params.id
			}
		}).then(product => {
			if (product) {
				res.status(200).json(product);
			} else {
				return next(new Error("Product with such ID is missing"));
			}
		});
	}

	static insertProduct(req, res, next) {
		if (!req.body) {
			return next(new Error("Did not pass any data for creating new product"));
		}

		Product.create({
			name: req.body.name
		}).then(product => {
			res.status(200).json(product);
		});
	}

}

module.exports = ProductsController;