'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts", 
      [
        {
          userId: 1,
          description: "an awesome post",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          description: "another awesome post",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          description: "a not so awesome post",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          description: "a not so awesome second post",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: "an okayish post",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description: "a really awesome post made by me",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          description: "a stupid post",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          description: "a really stupid post",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("posts", null, {})
  }
};
