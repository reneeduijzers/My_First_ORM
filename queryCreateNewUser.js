const users = require("./models").user;

async function createNewUser() {
  try {
    const newUser = await users.create({
      name: "Jan Duijzers",
      email: "jantje@hotmail.com",
      phone: 89876389,
      password: "Sasha",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return newUser.get({ plain: true });
    // filter out all the mess
    // single object (don't need to map)
  } catch (e) {
    console.error(e);
    // broken connections, syntax error or constraints violations. Nothing is not an error.
  }
}

createNewUser().then((user) => console.log(user));
// console.log it to the terminal
