const express = require('express');
const router = express.Router();
const products = require('../models/products.json');

router.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).send('Something broke!')
})

router
	.get('/', (req, res) => {
		res.json(products);
	})

	.get('/:id', (req, res) => {
		const productId = req.params.id;

		res.json(products[productId]);
	})

	.get('/:id/reviews', (req, res) => {
		const productId = req.params.id;

		res.json(products[productId].reviews);
	});


router.post('/', (req, res) => {
	if (!req.body) return res.sendStatus(400);

	const newProduct = {
		name: req.body.name,
		reviews: req.body.reviews
	}
	res.send(newProduct)
});


module.exports = router;