const router = require("express").Router();

const { getAllTodos, findTodo } = require("./controller");

router.get("/", getAllTodos);
router.get("/:id", findTodo);

module.exports = router;