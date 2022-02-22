var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./config/db");
var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");

var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users", usersRouter);

const eventEmitter = require("events");

const customEmitter = new eventEmitter();

customEmitter.on("hereEmit", function (grabIt) {
  console.log("event listener", grabIt);
});
customEmitter.emit("hereEmit", { a: 10, b: 20 });

module.exports = app;
