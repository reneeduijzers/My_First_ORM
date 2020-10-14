"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoitems",
      [
        {
          task: "vacuum cleaning",
          deadline: "today",
          important: false,
          todolistId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "reading",
          deadline: "today",
          important: true,
          todolistId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "watch game",
          deadline: "Friday",
          important: false,
          todolistId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "groceries",
          deadline: "tomorrow",
          important: true,
          todolistId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "copying",
          deadline: "Saturday",
          important: true,
          todolistId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoitems", null, {});
  },
};

// PLURAL MODELNAMES!!!
