const City = require('../models/city');


class CityController {

	static getCities(req, res, next) {
		City.find((err, cities) => {
			if (err) next(new Error(error.message));

			res.status(200).json(cities);
		});
	}

	static insertUpdateCity(req, res, next) {
		const options = { new: true, upsert: true };
		City.findByIdAndUpdate(req.params.id, req.body, options, (err, city) => {
			if (err) next(new Error(error.message));

			if (city) {
				res.sendStatus(200);
			}
		})
	}

	static removeCity(req, res, next) {
		City.findByIdAndRemove(req.params.id, (err, city) => {
			if (err) next(new Error(err.message));

			if (city) {
				res.sendStatus(200);
			} else {
				res.sendStatus(404);
			}
		});
	}
}

module.exports = CityController;