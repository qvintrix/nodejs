const express = require('express');
const router = express.Router();
const users = require('../models/users.json');

router.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).send('Something broke!')
})

router.get('/', (req, res) => {
	res.json(users);
})



module.exports = router;