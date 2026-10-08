
const db = require("../config/db");

// Add a new task
const addTask = (req, res) => {
    const { title, description, due_date } = req.body || {};
    if (!title || !title.trim()) {
        return res.status(400).json({
            message: "Task title is required"
        });
    }

    const sql = `
        INSERT INTO tasks (title, description, due_date)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [title.trim(), description || null, due_date || null],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to add task",
                    error: err.message
                });
            }

            res.status(201).json({
                message: "Task added successfully",
                taskId: result.insertId
            });
        }
    );
};

// View all tasks, with optional search and status filter
const getTasks = (req, res) => {
    let sql = "SELECT * FROM tasks WHERE 1=1";
    const values = [];

    if (req.query.status) {
        if (!["pending", "completed"].includes(req.query.status)) {
            return res.status(400).json({
                message: "Status must be pending or completed"
            });
        }

        sql += " AND status = ?";
        values.push(req.query.status);
    }

    if (req.query.q) {
        sql += " AND (title LIKE ? OR description LIKE ?)";
        values.push(`%${req.query.q}%`, `%${req.query.q}%`);
    }

    sql += " ORDER BY created_at DESC";

    db.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to fetch tasks"
            });
        }

        res.status(200).json(results);
    });
};

// View one task by ID
const getTaskById = (req, res) => {
    db.query(
        "SELECT * FROM tasks WHERE id = ?",
        [req.params.id],
        (err, results) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to fetch task"
                });
            }

            if (results.length === 0) {
                return res.status(404).json({
                    message: "Task not found"
                });
            }

            res.status(200).json(results[0]);
        }
    );
};

// Update a task
const updateTask = (req, res) => {
    const { title, description, status, due_date } = req.body;

    if (
        title !== undefined &&
        (typeof title !== "string" || !title.trim())
    ) {
        return res.status(400).json({
            message: "Title cannot be empty"
        });
    }

    if (
        status !== undefined &&
        !["pending", "completed"].includes(status)
    ) {
        return res.status(400).json({
            message: "Status must be pending or completed"
        });
    }

    const sql = `
        UPDATE tasks
        SET title = COALESCE(?, title),
            description = COALESCE(?, description),
            status = COALESCE(?, status),
            due_date = COALESCE(?, due_date)
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            title === undefined ? null : title.trim(),
            description === undefined ? null : description,
            status === undefined ? null : status,
            due_date === undefined ? null : due_date,
            req.params.id
        ],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to update task"
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Task not found"
                });
            }

            res.status(200).json({
                message: "Task updated successfully"
            });
        }
    );
};

// Delete a task
const deleteTask = (req, res) => {
    db.query(
        "DELETE FROM tasks WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to delete task"
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Task not found"
                });
            }

            res.status(200).json({
                message: "Task deleted successfully"
            });
        }
    );
};

module.exports = {
    addTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};