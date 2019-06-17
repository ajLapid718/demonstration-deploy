const express = require("express");
const app = express();
const PORT = 1234 || process.env.PORT;

app.get("/students", (req, res, next) => {
  res.json([{id: 1, name: Abe}, {id: 2, name: Brian}, {id: 3, name: Aaron}]);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
