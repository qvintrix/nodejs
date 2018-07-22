const City = require('../models/city');

class CityController {

	static getCities(req, res, next) {
		City.find((err, cities) => {
			if (err) return next(err);

			res.status(200).json(cities);
		});
	}

	static getRandomCity(req, res, next) {
		City.aggregate().
			sample(1).
			exec((err, city) => {
				if (err) return next(err);

				if (city) {
					res.status(200).json(city);
				} else {
					res.sendStatus(404);
				}
			});
	}

	static insertUpdateCity(req, res, next) {
		const options = { new: true, upsert: true };
		City.findByIdAndUpdate(req.params.id, req.body, options, (err, city) => {
			if (err) return next(err);

			if (city) {
				res.sendStatus(200);
			}
		})
	}

	static removeCity(req, res, next) {
		City.findByIdAndRemove(req.params.id, (err, city) => {
			if (err) return next(err);

			if (city) {
				res.sendStatus(200);
			} else {
				res.sendStatus(404);
			}
		});
	}

	static insertCity(req, res, next) {
		if (!req.body) {
			res.status(400).json({ error: 'validation error' });
		}

		const city = new City(req.body);

		city.save((err, city) => {
			if (err) return next(err);

			res.status(200).json(city);
		});
	}
}

module.exports = CityController;