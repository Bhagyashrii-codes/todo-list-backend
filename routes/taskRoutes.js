
const express = require("express");
const router = express.Router();

const {
    addTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

// Create a task
router.post("/", addTask);

// Get all tasks, with optional search and filtering
router.get("/", getTasks);

// Get one task by ID
router.get("/:id", getTaskById);

// Update a task
router.put("/:id", updateTask);

// Delete a task
router.delete("/:id", deleteTask);

module.exports = router;