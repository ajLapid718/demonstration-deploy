const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 1234;

app.get("/students", (req, res, next) => {
  res.status(200).json([{id: 1, name: "Axel"}, {id:2, name: "Chris"}, {id: 3, name: "Michelle"}]);
})

let locationOfPublicFolder = path.join(__dirname, "client", "build")
app.use(express.static(locationOfPublicFolder));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!!!`);
})
