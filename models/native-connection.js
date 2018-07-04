const { MongoClient } = require('mongodb');
const config = require('../config/config');
const cities = require('./mock-data/cities.json');


module.exports = MongoClient.connect(config.dbConnection, {})
.then(client => {
	console.log('DB success run');

	const db = client.db(config.dbName);
	db.cities = db.collection('cities');

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

	return db;
}));