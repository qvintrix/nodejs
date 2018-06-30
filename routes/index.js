const express = require('express');
const router = express.Router();

const users = require('./users');
const products = require('./products');
const cities = require('./cities');

router
	.use('/users', users)
	.use('/products', products)
	.use('/cities', cities);



module.exports = router;