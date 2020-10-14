"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("todolists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      }, // defines the relation
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("todoitems", "todolistId", {
      type: Sequelize.INTEGER,
      references: {
        model: "todolists",
        key: "id",
      }, // defines the relation
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todolists", "userId");
    await queryInterface.removeColumn("todoitems", "todolistId");
  },
};

// Camelcase: naammodelId
// PLURAL MODELNAMES!!!

// NOT POSSIBLE!
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.addColumn("todoitems", "todolistid", {
//       type: Sequelize.INTEGER,
//       references: {
//         model: "todolists",
//         key: "id",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "SET NULL",
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.removeColumn("todoitems", "todolistid");
//   },
// };
