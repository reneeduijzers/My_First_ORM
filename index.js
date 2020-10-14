const express = require("express");
const app = express();
const port = 4000;

const User = require("./models").user;
const TodoList = require("./models").todolist;

app.use(express.json()); // to keep original data type. Accces it as object.

app.post("/echo", (req, res) => {
  res.json(req.body); // or res.send
});

app.post("/users", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = await User.findByPk(userId);
  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user); // send user as respons to your terminal or webbrowser
  }
});

app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [TodoList],
    });
    // console.log("What is user", user);
    if (user) {
      res.send(user.todolists); // needs to be plural, with an s!
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

function onListen() {
  console.log(`Listening on :${port}`);
}

app.listen(port, onListen);
