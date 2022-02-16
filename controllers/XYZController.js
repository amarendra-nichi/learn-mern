const User = require("../models/User");
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
