const City = require('../models/city');

class CityController {

	static getCities(req, res, next) {
		City.find((err, cities) => {
			if (err) return next(err);

			res.status(200).json(cities.map(city => ({
				_id: city._id,
				name: city.firstName,
				country: city.surName,
				capital: city.capital,
				location: {
					lat: city.location.lat,
					long: city.location.long
				}
			})));
		});
	}

	static getRandomCity(req, res, next) {
		City.aggregate().
			sample(1).
			exec((err, city) => {
				if (err) return next(err);

				if (city) {
					res.status(200).json({
						location: {
							lat: city.location.lat,
							long: city.location.long
						},
						name: city.name,
						country: city.country,
						capital: city.capital
					});
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

			res.status(200).json({
				location: {
					lat: city.location.lat,
					long: city.location.long
				},
				name: city.name,
				country: city.country,
				capital: city.capital
			});
		});
	}
}

module.exports = CityController;