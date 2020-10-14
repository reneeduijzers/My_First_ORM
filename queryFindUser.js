const users = require("./models").user;

async function searchAllUsers() {
  try {
    const allUsers = await users.findAll();

    return allUsers.map((user) => user.get({ plain: true }));
    // filter out all the mess that comes along with the search result
  } catch (e) {
    console.error(e);
    // broken connections, syntax error or constraints violations. Nothing is not an error.
  }
}

searchAllUsers().then((user) => console.log(user));
