const User = require("../models/User");
const helper = require("../helpers/helpers");
const multer = require("multer");
const upload = multer({ dest: "uploads/" }).single("avatar");
// db

exports.index = async function (req, res) {
  var myins = await User.getUsers();
  return res.json({
    institute: {
      name: "XYZ",
      loca: "BLR",
    },
    user: myins,
  });
};
exports.create = function (req, res) {
  return res.json({ msg: "create" });
};

exports.getAll = async function (req, res) {
  try {
    var myins = await User.getUsers();
    return res.json({
      user: myins,
    });
  } catch (e) {
    console.log(e.message);
  }
};
exports.insert = async function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
    } else if (err) {
      // An unknown error occurred when uploading.
    } // Everything went fine.
  });
  let data = await User.insert(req.body);
  return res.status(201).json({ msg: "Inserted", data: data });
};

exports.update = async function (req, res) {
  const Data = await User.getUsersById(req.body.id);
  await Data.sayHi();

  let updateData = {
    name: req.body.name == null ? Data.name : req.body.name,
    location: req.body.location == null ? Data.location : req.body.location,
    email:
      req.body.email == null ? helper.LowerCase(Data.email) : req.body.email,
  };
  let Update = await User.update(req.body.id, updateData);
  return res.status(201).json({ msg: "update", data: updateData });
};
exports.delete = async function (req, res) {
  let del = await User.delete(req.body.id);
  return res.json({ msg: "deleted", data: del });
};

exports.TogetUserByName = async function (req, res) {
  const getNm = await User.getUserByName(req.body.name);
  console.log(req.body.name, "hetere", getNm);
  // const oneName = await User.by_name(req.body.name);
  try {
    const by_nameUser = await User.getUserByName("Feest");
    console.log(by_nameUser);

    return res.json({ msg: "find by name", data: by_nameUser });
  } catch (e) {
    console.log(e.message);
  }
};

exports.singleUser = async function (req, res) {
  try {
    const user = await User.getUsersById(req.body.id);
    return res.status(200).json({ msg: "find by name", data: user });
  } catch (e) {
    console.log(e.message);
  }
};
