const toDoItems = require("./models").todoitem;
const { Op } = require("sequelize"); //destructering

async function searchImportantToDoItem() {
  try {
    const importantToDoItems = await toDoItems.findAll({
      where: {
        important: true,
      },
    });

    return importantToDoItems.map((item) => item.get({ plain: true }));
    // filter out all the mess that comes along with the search result
    // array so map!
  } catch (e) {
    console.error(e);
    // broken connections, syntax error or constraints violations. Nothing is not an error.
  }
}

searchImportantToDoItem().then((item) => console.log(item));
// console.log it to the terminal
