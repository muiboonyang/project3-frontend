// =======================================
//              DEPENDENCIES
// =======================================

// Dependencies
const mongoose = require("mongoose");
// const db = mongoose.connection;
const express = require("express");
const cors = require("cors");

const app = express();
const methodOverride = require("method-override");

app.use(cors());
app.use(express.json()); // allows res.body to work (express.json lets you read the req.body in json)
app.use(express.urlencoded({ extended: false })); // allows you to read what the forms send over (by default, it's all encoded), just declare it
app.use(methodOverride("_method"));

// =======================================
//              DATABASE
// =======================================

// Config
const mongoURI = "mongodb://localhost:27017/tasks";

// Models
const TaskModel = require("./models/tasks.js");
const taskSeed = require("./models/seed.js");

// Connect to Mongo
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("The connection with mongod is established");
  }
);

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
