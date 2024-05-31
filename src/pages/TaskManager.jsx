import { useState, useEffect } from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import ProjectForm from "../components/ProjectForm.jsx";
import TaskForm from "../components/TaskForm.jsx";
import ProjectList from "../components/ProjectList.jsx";
import TaskList from "../components/TaskList.jsx";

const TaskManager = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchProjects();
    fetchTasks();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const createProject = async (project) => {
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });
      const newProject = await response.json();
      setProjects([...projects, newProject]);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const updateProject = async (project) => {
    try {
      const response = await fetch(`/api/projects/${project.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });
      const updatedProject = await response.json();
      setProjects(projects.map((p) => (p.id === updatedProject.id ? updatedProject : p)));
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const deleteProject = async (projectId) => {
    try {
      await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });
      setProjects(projects.filter((project) => project.id !== projectId));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const updateTask = async (task) => {
    try {
      const response = await fetch(`/api/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const updatedTask = await response.json();
      setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" w="full">
      <Heading size="md" mb={4}>Task Manager</Heading>
      <VStack spacing={4} align="start" w="full">
        <ProjectForm onSubmit={createProject} />
        <ProjectList projects={projects} onUpdate={updateProject} onDelete={deleteProject} />
        <TaskForm onSubmit={createTask} />
        <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
      </VStack>
    </Box>
  );
};

export default TaskManager;