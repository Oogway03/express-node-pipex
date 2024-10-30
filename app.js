const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Endpoint API
app.get("/", (req, res) => {
  res.json({ message: "Hello from master Oogway!" });
});

module.exports = app;
