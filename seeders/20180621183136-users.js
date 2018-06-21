'use strict';

const { User } = require('../models');
const users = require('../server/models/users.mock.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const promises = users.map((user) => {
      return User.create({
        firstName: user.firstName,
        surName: user.firstName,
      });
    });

    return Promise.all(promises);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
