import Task from "../models/Task.js";
const err = new Error("erro");
const getAllTask = async (req, res) => {
  try {
    const taskList = await Task.find();
    return res.render("index", { taskList, task: null, taskDelete: null });
  } catch (err) {}
};

const createTask = async (req, res) => {
  const task = req.body;
  if (!task.task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
const getById = async (req, res) => {
  try {
    const taskList = await Task.find();
    if (req.params.method == "update") {
      const task = await Task.findOne({ _id: req.params.id });
      res.render("index", { task, taskDelete: null, taskList });
    } else {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index", { task: null, taskDelete, taskList });
    }
  } catch {
    res.status(500).send({ error: err.message });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    res.redirect("/");
  } catch {
    res.status(500).send({ error: err.message });
  }
};

const deleteOneTask = async (req, res) => {
  const id = req.params.id;
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch {
    res.status(500).send({ error: err.message });
  }
};

export default {
  getAllTask,
  createTask,
  getById,
  updateOneTask,
  deleteOneTask,
};
