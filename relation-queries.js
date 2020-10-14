const { user, todoitem, todolist } = require("./models");

// Queries are async functions, so need to use await, and .then

async function listsWithUsers() {
  const lists = await todolist.findAll({
    include: [user],
    // relation specified in model
  });

  return lists.map((list) => list.get({ plain: true }));
}

listsWithUsers().then((list) =>
  console.log("all todolists with their user:", list)
);

async function listsWithUsersName() {
  const lists = await todolist.findAll({
    include: [{ model: user, attributes: ["name"] }],
    // relation specified in model
  });
  return lists.map((list) => list.get({ plain: true }));
}

listsWithUsersName().then((list) =>
  console.log("all todolists with their username only:", list)
);

// other way around also works!
async function getUsers() {
  const allUsers = await user.findAll({
    include: [{ model: todolist, attributes: ["name"] }],
    // relation specified in model
  });
  return allUsers.map((user) => user.get({ plain: true }));
}

getUsers().then((users) =>
  console.log("all users with their todolist:", JSON.stringify(users, null, 2))
);

// JSON.stringify to show to the data in the objects (data is to "ugly to console.log")
// , null, 2 (= indent 2) to make it more pretty
