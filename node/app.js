// Requiring module
const express = require("express");

// Creating express object
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");

app.use(cors());

//mongoose connect - connects this to the db, also mongo server should be running beforehand

// mongoose.connect("mongodb://localhost:27017/todo", { useNewUrlParser: true });

// Handling GET request
app.post("/", (req, res) => {
  res.send("A simple Node App is " + "running on this server");
  res.end();
});

// Port Number
const PORT = process.env.PORT || 8080;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));

//https://stackoverflow.com/questions/29820791/git-ignore-node-modules-folder-everywhere
