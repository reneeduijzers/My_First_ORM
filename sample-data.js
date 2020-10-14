const TodoItem = require("./models").todoitem;

async function createSampleTodoItems() {
  try {
    const todo1 = await TodoItem.create({
      task: "Clean bedroom",
      important: false,
    });
    const todo2 = await TodoItem.create({
      task: "Learn to code",
      important: true,
    });
    const todo3 = await TodoItem.create({
      task: "Have fun",
      important: true,
    });

    console.log("What is todo1", todo1);

    return [todo1, todo2, todo3].map((item) => item.get({ plain: true }));
    // filter out all the mess
    // array so map!
  } catch (e) {
    console.error(e);
    // broken connections, syntax error or constraints violations. Nothing is not an error.
  }
}

createSampleTodoItems().then((todos) => console.log(todos));
// console.log it to the terminal
