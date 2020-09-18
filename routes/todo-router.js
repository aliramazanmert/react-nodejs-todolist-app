const express = require("express");

const todoCtrl = require("../controllers/todo-ctrl");

const router = express.Router();

router.post("/", todoCtrl.createItem);
router.get("/", todoCtrl.getTodos);
router.delete("/:id", todoCtrl.deleteTodo);
router.put("/:id", todoCtrl.updateTodo);

module.exports = router;
