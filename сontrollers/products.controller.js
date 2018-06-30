const Product = require('../models/product');

class ProductsController {

	static getProducts(req, res, next) {
		Product.find((err, products) => {
			if (err) next(new Error(err.message));

			res.status(200).json(products);
		});
	}

	static getProduct(req, res, next) {
		Product.findOne({ _id: req.params.id }, (err, product) => {
			if (err) next(new Error(err.message));

			if (product) {
				res.status(200).json(product);
			} else {
				res.sendStatus(404);
			}
		});
	}

	static insertProduct(req, res, next) {
		if (!req.body) {
			res.status(400).json({ error: 'validation error' });
		}

		const product = new Product({ name: req.body.name });

		product.save((err, product) => {
			if (err) next(new Error(err.message));

			res.status(200).json(product);
		});
	}

	static removeProduct(req, res, next) {
		Product.findByIdAndRemove(req.params.id, (err, product) => {
			if (err) next(new Error(err.message));

			if (product) {
				res.sendStatus(200);
			} else {
				res.sendStatus(404);
			}
		});
	}
}

module.exports = ProductsController;