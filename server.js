
const express = require("express");
const db = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("To-Do List Backend API is running!");
});

app.get("/db-test", (req, res) => {
    db.query("SELECT 1", (err) => {
        if (err) {
            return res.status(500).json({
                message: "Database connection failed"
            });
        }

        res.json({
            message: "Database connected successfully!"
        });
    });
});

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});