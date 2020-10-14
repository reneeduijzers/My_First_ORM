const users = require("./models").user;

async function searchByPk() {
  try {
    const userByPk = await users.findByPk(6);

    return userByPk.get({ plain: true });
    // filter out all the mess that comes along with search result
    // single object, no array, so no mapping!
  } catch (e) {
    console.error(e);
    // broken connections, syntax error or constraints violations. Nothing is not an error.
  }
}

searchByPk().then((user) => console.log(user));
