const mongoose = require("mongoose");
const cities = require('./mock-data/cities.json')

const options = {
	timestamps: { createdAt: 'lastModifiedDate', updatedAt: 'lastModifiedDate' }
};
const citySchema = mongoose.Schema({
	name: String,
	country: String,
	capital: Boolean,
	location: {
		lat: Number,
		long: Number
	}
}, options);

citySchema.statics.initMockData = function () {
	this.create(cities, (err) => {
		if (err) {
			throw new Error('Error save collection of posts');
		}
	})
};



const City = mongoose.model('City', citySchema);

module.exports = City;