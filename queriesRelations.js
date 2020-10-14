const { user, todoitem, todolist, tag } = require("./models");

async function getUserWithList(id) {
  const result = await user.findByPk(id, { include: [todolist] });
  return result.get({ plain: true });
}

getUserWithList(1).then((user) =>
  console.log("user by id with their lists:", user)
);

async function importantTodos() {
  const todos = await todoitem.findAll({
    where: { important: false },
    include: { model: todolist, attributes: ["name"] },
  });
  return todos.map((item) => item.get({ plain: true }));
}

importantTodos().then((items) =>
  console.log("important todo's of all users:", items)
);

async function fullUserById(id) {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todolist,
        attributes: ["name"],
        include: { model: todoitem, attributes: ["task"] },
      },
    ],
  });
  return result.get({ plain: true });
}

fullUserById(1).then((user) =>
  console.log(
    "user by id with their lists and their tasks:",
    JSON.stringify(user, null, 2)
  )
);

// MANY TO MANY QUERY:
async function itemsWithTags() {
  const items = await todoitem.findAll({ include: [tag] });
  return items.map((item) => item.get({ plain: true }));
}
itemsWithTags().then((items) =>
  console.log("items with tags", JSON.stringify(items, null, 2))
);
