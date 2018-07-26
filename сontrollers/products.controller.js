const Product = require('../models/product');

class ProductsController {

	static getProducts(req, res, next) {
		Product.find((err, products) => {
			if (err) return next(err);

			res.status(200).json(products.map(product => ({
				_id: product._id,
				name: product.name
			})));
		});
	}

	static getProduct(req, res, next) {
		Product.findOne({ _id: req.params.id }, (err, product) => {
			if (err) return next(err);

			if (product) {
				res.status(200).json({
					_id: product._id,
					name: product.name
				});
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
			if (err) return next(err);

			res.status(200).json({
				_id: product._id,
				name: product.name
			});
		});
	}

	static removeProduct(req, res, next) {
		Product.findByIdAndRemove(req.params.id, (err, product) => {
			if (err) return next(err);

			if (product) {
				res.sendStatus(200);
			} else {
				res.sendStatus(404);
			}
		});
	}
}

module.exports = ProductsController;