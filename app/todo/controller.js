const todos = require('./dummy.js');

module.exports = {
  // get all todos
  getAllTodos: async (req, res) => {
    try {
      res.status(200).json({
        message: "All the todos",
        todos
      })

    } catch (error) {
      res.status(500).json({ message: "Internal server error" })
    }
  },

  // get single todo
  findTodo: async (req, res) => {
    const { id } = req.params
    try {
      const findTodo = todos.find(todo => todo.id === parseInt(id));
      if (findTodo) {
        return res.status(200).json({
          todo: findTodo,
          message: "A single todo",
        });
      }
      return res.status(404).json({
        message: "Todo not found",
      });

    } catch (error) {
      res.status(500).json({ message: "Internal server error" })
    }
  },
}