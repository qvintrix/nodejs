const express = require('express');
const router = express.Router();

const users = require('./users');
const products = require('./products');
const checkJwtToken = require('../middlewares/verify-jwtoken');

router.use(checkJwtToken)
router.use('/users', users)
router.use('/products', products)



module.exports = router;