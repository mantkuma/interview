const express = require("express");
const routes = require("./routes");
var app = express();
app.use("/api", routes);
module.exports = app;
