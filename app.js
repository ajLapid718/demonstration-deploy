const express = require("express");
const app = express();

app.get("/students", (req, res, next) => {
  res.json([{id: 1, name: Abe}, {id: 2, name: Brian}, {id: 3, name: Aaron}]);
})

app.listen(1234, () => {
  console.log("Listening on port 1234");
});
