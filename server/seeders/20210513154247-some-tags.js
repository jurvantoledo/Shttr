'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags", 
      [
        {
          tag: "pooping",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: "big shit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: "hard shit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: "soft shit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: "diarrhea",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {})
  }
};