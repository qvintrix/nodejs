const mongoose = require("mongoose");
const city = require('./city');
const user = require('./user');
const product = require('./product');
const config = require('../config/config');

// mongoose.connect(`${config.dbConnection}/${config.dbName}`);
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
// 	console.log('DB success run');

// 	city.initMockData();
// 	user.initMockData();
// 	product.initMockData();
// });

// module.exports = db;

//implementation of native driver:

const { MongoClient } = require('mongodb');
const cities = require('./mock-data/cities.json');

module.exports = app => {
	MongoClient.connect(config.dbConnection, {})
		.then(client => {
			console.log('DB success run');

			const db = client.db(config.dbName);
			db.cities = db.collection('cities');

			app.db = db;

			return db;
		})
		.catch(error => {
			console.error(error);

			throw Error(error);
		})
		.then(db => db.cities.count().then(citiesCount => {
			if (citiesCount === 0) {
				return db.cities.insertMany(cities);
			}
		}));
};