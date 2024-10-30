const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Endpoint API
app.get("/", (req, res) => {
  res.json({ message: "Hello from master Oogway!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
