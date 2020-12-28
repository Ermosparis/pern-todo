const pool = require("../../db");

const getAllToDos = () => {
  return async (req, res) => {
    try {
      const allToDos = await pool.query("SELECT * FROM todo");
      res.json(allToDos.rows);
    } catch (err) {
      console.error(err.message);
    }
  };
};

module.exports = getAllToDos;
