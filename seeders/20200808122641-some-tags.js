"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "yellow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "blue",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "green",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};

// PLURAL MODELNAMES!!!
