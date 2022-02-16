const mongoose = require("mongoose");
const userSchema = require("./User");
const instituteSchema = require("./Institute");

const User = mongoose.model("User", userSchema);
const Institute = mongoose.model("Institute", instituteSchema);

module.exports = {
  User,
  Institute,
};
