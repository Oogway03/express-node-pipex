const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Endpoint API
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
