const mongoose = require("mongoose");
const products = require('./mock-data/products.json');

const options = {
	timestamps: { createdAt: 'lastModifiedDate', updatedAt: 'lastModifiedDate' }
};

const productSchema = mongoose.Schema({
	name: String
}, options);

productSchema.statics.initMockData = function () {
	this.create(products, (err) => {
		if (err) {
			throw new Error('Error save collection of posts');
		}
	})
}

const Product = mongoose.model('Product', productSchema);

module.exports = Product;