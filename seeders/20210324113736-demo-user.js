'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const employee = {
      first_name: 'ahmad',
      last_name: 'montazeri',
      username: 'kybora',
      email: 'example@example.com',
      password: '12345678'
    };
    return queryInterface.bulkInsert('Users', [{
      first_name: employee.first_name,
      last_name: employee.last_name,
      username: employee.username,
      email: employee.email,
      password: employee.password,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
