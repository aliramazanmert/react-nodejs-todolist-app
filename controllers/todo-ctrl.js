const Todo = require("../models/todo-model");

createItem = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an item",
    });
  }

  const todo = new Todo(body);

  if (!todo) {
    return res.status(400).json({ success: false, error: err });
  }

  todo
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        id: todo._id,
        message: "todo item created",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "todo item not created",
      });
    });
};

getTodos = async (req, res) => {
  await Todo.find({}, (err, todos) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: todos });
  }).catch((err) => console.log(err));
};

deleteTodo = async (req, res) => {
  await Todo.findOneAndRemove({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(500).send({ success: false, error: err });
    }

    const response = {
      message: "Todo successfully deleted",
      id: req.params.id,
    };
    return res.status(200).send(response);
  });
};

updateTodo = async (req, res) => {
  await Todo.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) {
      return res.status(500).send({ success: false, error: err });
    }

    const response = {
      message: "Todo successfully updated",
      id: req.params.id,
    };
    return res.status(200).send(response);
  });
};

module.exports = { createItem, getTodos, deleteTodo, updateTodo };
