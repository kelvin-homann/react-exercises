const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Create and connect to the SQLite database
const database = new sqlite3.Database("todos.db");

database.serialize(() => {
  database.run(
    "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT, completed INTEGER, due_date TEXT, tags TEXT)"
  );
});

// Middleware to enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Read all todos
app.get("/todos", (req, res) => {
  database.all("SELECT * FROM todos", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json(rows.map((row) => ({ ...row, completed: !!row.completed })));
  });
});

// Read a single todo
app.get("/todos/:id", (req, res) => {
  const id = req.params.id;

  database.get("SELECT * FROM todos WHERE id = ?", id, (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    row.completed = !!row.completed;

    res.json(row);
  });
});

// Create a new todo
app.post("/todos", (req, res) => {
  console.log(req.body);

  const { task, completed, due_date, tags } = req.body;

  database.run(
    "INSERT INTO todos (task, completed, due_date, tags) VALUES (?, ?, ?, ?)",
    [task, false, due_date, tags],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.json({ id: this.lastID, text: task, completed: false });
    }
  );
});

// Update a todo
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const { task, completed, due_date, tags } = req.body;

  database.run(
    "UPDATE todos SET task = ?, completed = ?, due_date = ?, tags = ? WHERE id = ?",
    [task, completed, due_date, tags, id],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.json({ message: "Todo updated successfully" });
    }
  );
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;

  database.run("DELETE FROM todos WHERE id = ?", id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({ message: "Todo deleted successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`);
});
