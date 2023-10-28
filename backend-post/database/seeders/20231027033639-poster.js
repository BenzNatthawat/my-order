'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const posters = [
      {
        title: 'Angular',
        image: 'angular.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Nest',
        image: 'nest.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Postgrest',
        image: 'postgrest.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Jest',
        image: 'jest.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Docker',
        image: 'docker.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('posters', posters, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('posters', null, {});
  },
};
