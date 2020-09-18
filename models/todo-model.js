const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = new Schema(
  {
    todo: { type: String, required: true },
    completed: { type: Boolean, default: false },
    dueDate: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todos", Todo);
