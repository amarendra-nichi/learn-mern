const mongoose = require("mongoose");
// const { Schema } = mongoose();

const Institute = mongoose.model("Institute", {
  name: String,
  location: String,
});

const User = mongoose.model("User", {
  name: String,
  location: String,
});

// new Institute({ name: "GIMT", location: "BLR" })
//   .save()
//   .then((res) => console.log(res));
// const kitty = new User({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));

exports.getUsers = async function () {
  console.log("hit", Institute.find({ name: "GIMT" }));
  const users = await Institute.find({});
  return users;
};

exports.insert = function (payload) {
  return new User(payload).save();
};
