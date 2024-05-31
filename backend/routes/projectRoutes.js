const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Create a new project
router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const project = await newProject.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a project
router.put('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a project
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Project deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;