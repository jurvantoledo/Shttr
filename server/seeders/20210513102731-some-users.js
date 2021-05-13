'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jur van Toledo",
          email: "j@j.nl",
          phone: "+31 612345678",
          image: "https://i0.wp.com/pulse.seattlechildrens.org/wp-content/uploads/Poop-Emoji-300x294-1.jpg?fit=300%2C294&ssl=1",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jur van Torpedo",
          email: "j@torpedo.nl",
          phone: "+31 612345678",
          image: "https://i0.wp.com/pulse.seattlechildrens.org/wp-content/uploads/Poop-Emoji-300x294-1.jpg?fit=300%2C294&ssl=1",
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jur di Toledo",
          email: "j@toledo.nl",
          phone: "+31 612345678",
          image: "https://i0.wp.com/pulse.seattlechildrens.org/wp-content/uploads/Poop-Emoji-300x294-1.jpg?fit=300%2C294&ssl=1",
          password: "12345",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nino C. Hoffmans",
          email: "n@h.com",
          phone: "+31 612345678",
          image: "https://i0.wp.com/pulse.seattlechildrens.org/wp-content/uploads/Poop-Emoji-300x294-1.jpg?fit=300%2C294&ssl=1",
          password: "321",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
