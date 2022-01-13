// =======================================
//              DEPENDENCIES
// =======================================

// Dependencies
const connectDB = require("./models/db");
const express = require("express");
const cors = require("cors");

// Config
const mongoURI = "mongodb://localhost:27017/tasks";
connectDB(mongoURI);

const app = express();
const methodOverride = require("method-override");

app.use(cors());
app.use(express.json()); // allows res.body to work (express.json lets you read the req.body in json)
app.use(express.urlencoded({ extended: false })); // allows you to read what the forms send over (by default, it's all encoded), just declare it
app.use(methodOverride("_method"));

// =======================================
//              DATABASE
// =======================================

// Models
const TaskModel = require("./models/tasks.js");
const taskSeed = require("./models/seed.js");

// =======================================
//              ROUTES
// =======================================

//======================
// Seed data
//======================

app.post("/seed", async (req, res) => {
  await TaskModel.create(taskSeed, (err, data) => {
    if (err) console.log(err.message);
    res.redirect("/tasks");
    console.log(`There are ${data} tasks in this database`);
  });
});

//======================
// CREATE - Post
//======================

app.post("/requests", async (req, res) => {
  await TaskModel.create(req.body, (err, data) => {
    if (err) console.log(err.message);
    res.redirect("http://localhost:3000/tasks");
    console.log(`There are ${data} tasks in this database`);
  });
});

//======================
// READ - Get
//======================

app.get("/tasks", async (req, res) => {
  const allTasks = await TaskModel.find();
  res.json(allTasks);
});

app.get("/:id", async (req, res) => {
  const result = await TaskModel.find({ _id: req.params.id });
  res.json(result);
});

// =======================================
//              LISTENER
// =======================================

app.listen(5001);
