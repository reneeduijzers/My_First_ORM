"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Renee Duijzers",
          email: "reneeduijzers@hotmail.com",
          phone: 23657890,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Remy Ruijzenaars",
          email: "remyislief@gmail.com",
          phone: 89707489,
          password: "hello",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Daniel van den Broek",
          email: "danielisgek@gmail.com",
          phone: 89456789,
          password: "joehoe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};

// PLURAL MODELNAMES!!!