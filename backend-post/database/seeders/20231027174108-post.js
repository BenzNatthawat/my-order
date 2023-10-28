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
    const posts = [
      {
        name: 'John Doe',
        post: 'Use this mockup template for easily creating a text-based Facebook post. Use the right sidebar to add your own text and profile image of the user.',
        score: 4.5,
        poster_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jim Drak',
        post: 'Create realistic mockups of t-shirts, websites, and posters in one click. Canva’s mockup generator lets you transform your creations from concept to reality, with no design experience needed. Use mockups for your design proposals, product promotions, and more.',
        score: 3,
        poster_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jack Cather',
        post: 'The Mock feature provided by MUnit allows you to define mocked behavior for a message processor. In this case, MUnit replaces the normal behavior of the message processor with the behavior you define. Thus you can modify how a specific message processor responds when it is called with a particular set of attributes.',
        score: 2.5,
        poster_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('posts', posts, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('posts', null, {});
  },
};
