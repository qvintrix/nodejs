const mongoose = require("mongoose");
const users = require('./mock-data/users.json');

const options = {
	timestamps: { createdAt: 'lastModifiedDate', updatedAt: 'lastModifiedDate' }
};

const userSchema = mongoose.Schema({
	firstName: String,
	surName: String
}, options);

userSchema.statics.initMockData = function () {
	this.create(users, (err) => {
		if (err) {
			throw new Error('Error save collection of users');
		}
	})
}

const User = mongoose.model('User', userSchema);

module.exports = User;