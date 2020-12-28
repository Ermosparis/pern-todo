const pool = require("../../db");

const getToDo = () => {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [
        id,
      ]);
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };
};

module.exports = getToDo;
