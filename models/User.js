const mongoose = require("mongoose");
const { User } = require("../database/Migrations/Index");
// const { Schema } = mongoose();

// const Institute = mongoose.model("Institute", {
//   name: String,
//   location: String,
// });

// new Institute({ name: "GIMT", location: "BLR" })
//   .save()
//   .then((res) => console.log(res));
// const kitty = new User({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));

exports.getUsers = async function () {
  // console.log("hit", Institute.find({ name: "GIMT" }));
  const users = await User.find({});
  return users;
};

exports.insert = function (payload) {
  return new User(payload).save();
};

// exports.getUsersOnAge() = ()=> {
//     console.log(User)
// }
