const toDoItems = require("./models").todoitem;

async function searchAllToDoItems() {
  try {
    const allToDoItems = await toDoItems.findAll();

    const result = allToDoItems.map((item) => item.get({ plain: true }));
    // filter out all the mess that comes along with the search result

    console.log("What are all items?", result);
    // you can only console.log, before the retun.

    return result;
  } catch (e) {
    console.error(e);
    // broken connections, syntax error or constraints violations. Nothing is not an error.
  }
}

searchAllToDoItems().then((item) => console.log(item));

// console.log("What are all items?", allToDoItems): does not work!
