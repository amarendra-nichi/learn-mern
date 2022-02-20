var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
mongoose.set("toJSON", { virtuals: true });
mongoose.connect("mongodb://localhost:27017/learn-mern");

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});
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

module.exports = app;
