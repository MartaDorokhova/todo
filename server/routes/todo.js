const { Router } = require("express");
const Todo = require("../models/todo");

const router = Router();
// получение списка задач
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.findAll();
    console.log(todos);
    res.status(201).json({ todos });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Создание новой задачи
router.post("/", async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      done: false,
    });
    res.status(201).json({ todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Изменение задачи
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByPk(+req.params.id);
    todo.done = req.body.done;
    await todo.save();
    res.status(200).json({ todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Удаление задачи
router.delete("/:id", async (req, res) => {
  try {
    const todos = await Todo.findAll({
      where: +req.params.id,
    });
    todos[0].destroy();
    res.status(204).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;
