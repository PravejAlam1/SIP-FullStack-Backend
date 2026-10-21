const express = require("express");
const app = express();

// console.dirs(app)

let port = 8000;

app.listen(port, () => {
  console.log(`app is listening on port${port}`);
});

app.use((req, res) => {
  console.log("request reciveed");
  res.send("this is basic response")
});