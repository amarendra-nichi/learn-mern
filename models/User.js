const mongoose = require("mongoose");
const { User } = require("../database/Migrations/Index");

exports.insert = async function (payload) {
  return await User.insertMany(payload);
};

exports.getUsersById = async function (payload) {
  const users = await User.findById(payload).populate("institute");
  console.log(users, "Data");
  return users;
};

exports.update = async function (id, payload) {
  const users = await User.findByIdAndUpdate(id, payload);
  return users;
};
exports.delete = async function (id) {
  const users = await User.findByIdAndDelete(id);
  return users;
};

exports.getUserByName = async function (name) {
  const usr = await User.findByName(name);
  return usr;
};

exports.getUsers = async function () {
  return await User.find({});
};
// exports.by_name = async (name) => await User.find().byName(name);
