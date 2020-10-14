"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todoitem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      todoitem.belongsTo(models.todolist);
      todoitem.belongsToMany(models.tag, {
        through: "itemTags",
        foreignKey: "todoItemId",
      });
    }
  }
  todoitem.init(
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
      todolistId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "todoitem",
    }
  );
  return todoitem;
};
