const router = require("express").Router();
const creatToDo = require("./scripts/creatToDo");
const getAllToDos = require("./scripts/getAllToDos");
const getToDo = require("./scripts/getToDo");
const updateToDo = require("./scripts/updateToDo");
const deleteToDo = require("./scripts/deleteToDo");

//ROUTES//

//create a todo
router.post("/todos", creatToDo());

//get all todos
router.get("/todos", getAllToDos());

//get a todo
router.get("/todos/:id", getToDo());

//update a todo
router.put("/todos/:id", updateToDo());

//delete a todo
router.delete("/todos/:id", deleteToDo());

module.exports = router;
