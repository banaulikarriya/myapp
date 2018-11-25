const mongoose = require("mongoose");

const Task = require("../model/taskModel");

//function to add task
async function addTask(req, res) {
  let data = req.body;
  try {
    var taskData = new Task(data);
    let task = await taskData.save();
    return res.json(task);
  } catch (e) {
    var errMsg = "There was Error " + e + "\n";
    res.render("newTask", { err: errMsg });
  }
}

//function to list
async function list(req, res) {
  let query = { $and: [] };
  query.$and.push({ status: "active" });
  try {
    let task = await Task.find(query).exec();
    res.render("index", { tasks: task });
  } catch (e) {
    var errMsg = "There was Error " + err + "\n";
    res.render("newTask", { err: errMsg });
  }
}

//function delete
async function updateTask(req, res) {
  let id = req.params.id;
  let data = req.body;
  try {
    let task = await Task.findOneAndUpdate({_id : id },data,{new : true}).exec(); 
    res.json(task)
  } catch (e) {
    var errMsg = "There was Error " + err + "\n";
    res.render("newTask", { err: errMsg });
  }
}

//function update
async function removeTask(req, res) {
  let id = req.params.id;
  try {
    let task = await Task.findOneAndUpdate({_id : id },{ $set: { status: 'deleted' }},{new : true}).exec(); 
    res.json(task)
  } catch (e) {
    var errMsg = "There was Error " + err + "\n";
    res.render("newTask", { err: errMsg });
  }
}

async function getTask(req, res) {
  res.render("newTask");
}

module.exports = {
  addTask,
  getTask,
  list,
  removeTask,
  updateTask
};
