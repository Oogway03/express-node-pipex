const app = require("./app");
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

module.exports = server;
