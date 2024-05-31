const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create a new task within a project
router.post('/', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const task = await newTask.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks for a project
router.get('/project/:projectId', async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;