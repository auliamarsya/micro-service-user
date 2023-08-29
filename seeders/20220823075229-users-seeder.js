'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [
      {
        name: 'Aulia Marsya',
        profession: 'Developer',
        role: 'admin',
        email: 'admin123@gmail.com',
        password: await bcrypt.hash('admin123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Alifa Al Farizi',
        profession: 'Developer',
        role: 'student',
        email: 'alifa123@gmail.com',
        password: await bcrypt.hash('alifa123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('users', null, {});
     */

     await queryInterface.bulkDelete('users', null, {});
  }
};
