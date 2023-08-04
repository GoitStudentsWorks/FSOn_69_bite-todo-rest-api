const { ctrlerWrapper } = require("../../helpers");

const addBoard = require("./addBoard");
const addColumn = require("./addColumn");
const addTask = require("./addTask");
const updateTask = require("./updateTask");
const updateColumn = require("./updateColumn");
const updateBoard = require("./updateBoard");
const getTasks = require("./getTasks");
const getColumns = require("./getColumns");
const getAllBoards = require("./getAllBoards");
const deleteTask = require("./deleteTask");
const deleteColumn = require("./  deleteColumn");

module.exports = {
  addBoard: ctrlerWrapper(addBoard),
  addColumn: ctrlerWrapper(addColumn),
  addTask: ctrlerWrapper(addTask),
  updateTask: ctrlerWrapper(updateTask),
  updateColumn: ctrlerWrapper(updateColumn),
  updateBoard: ctrlerWrapper(updateBoard),
  getTasks: ctrlerWrapper(getTasks),
  getColumns: ctrlerWrapper(getColumns),
  getAllBoards: ctrlerWrapper(getAllBoards),
  deleteTask: ctrlerWrapper(deleteTask),
  deleteColumn: ctrlerWrapper(deleteColumn),
};
