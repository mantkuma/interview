const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express running on AWS Lambda!");
});

module.exports = app;
