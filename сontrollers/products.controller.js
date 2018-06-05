const products = require("../models/products.json");

class ProductsController {

	static getProducts(req, res, next) {
		if (!products) {
			return next(new Error("Products are empty"));
		}

		res.status(200).json(products);
	}

	static getProduct(req, res, next) {
		const productId = req.params.id;

		if (!products[productId]) {
			return next(new Error("Product with such ID is missing"));
		}

		res.status(200).json(products[productId]);
	}

	static getProductReviews(req, res, next) {
		const productId = req.params.id;

		if (!products[productId]) {
			return next(new Error("Product with such ID is missing"));
		}
		res.status(200).json(products[productId].reviews);
	}

	static insertProduct(req, res, next) {
		if (!req.body) {
			return next(new Error("Did not pass any data for creating new product"));
		}

		const newProduct = {
			name: req.body.name,
			reviews: req.body.reviews
		};
		res.status(200).send(newProduct);
	}

}

module.exports = ProductsController;