'use strict';

const { Product } = require('../server/models');
const products = require('../server/models/mock-data/products.mock.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const promises = products.map((product) => {
      return Product.create({
        name: product.name
      });
    })

    return Promise.all(promises);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
