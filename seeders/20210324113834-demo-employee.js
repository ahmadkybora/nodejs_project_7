'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const user = {
      first_name: 'ahmad',
      last_name: 'montazeri',
      username: 'kybora',
      email: 'example@example.com',
      password: '12345678'
    };
    return queryInterface.bulkInsert('Employees', [{
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      password: user.password,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
