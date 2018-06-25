const { Product } = require('../models');

class ProductsController {

	static getProducts(req, res, next) {
		Product.findAll().then(products => {
			res.status(200).json(products);
		})
		.catch(error => {
			next(new Error(error.message));
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
				res.sendStatus(404);
			}
		})
		.catch(error => {
			next(new Error(error.message));
		});
	}

	static insertProduct(req, res, next) {
		if (!req.body) {
			res.status(400).json({ error: 'validation error' });
		}

		Product.create({
			name: req.body.name
		}).then(product => {
			res.status(200).json(product);
		})
		.catch(error => {
			next(new Error(error.message));
		});
	}

}

module.exports = ProductsController;