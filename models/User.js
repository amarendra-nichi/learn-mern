const mongoose = require("mongoose");
// const { Schema } = mongoose();

const Institute = mongoose.model("Institute", {
  name: String,
  location: String,
});

const User = mongoose.model("User", {
  name: String,
  location: String,
  email:String
});

// new User({ name: "GIMT", location: "BLR" ,email:"Test@gmail.com"})
//   .save()
//   .then((res) => console.log(res));
// const kitty = new User({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));

exports.getUsers = async function () {
  console.log("hit", Institute.find({ name: "GIMT" }));
  const users = await Institute.find({});
  return users;
};

exports.insert =async  function (payload) {
  return await User.insertMany(payload)
};

exports.getUsersById = async function (payload) {
  console.log(payload)
  const users = await User.findById(payload);
  console.log(users,"Data")
  return users;
};

exports.update = async function (id,payload) {
  const users = await User.findByIdAndUpdate(id, payload)
  return users;
};
exports.delete = async function (id) {
  const users = await User.findByIdAndDelete(id)
  return users;
};

