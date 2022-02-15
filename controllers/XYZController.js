const User = require("../models/User");
// db
exports.index = function (req, res) {
  return res.json({
    institute: {
      name: "XYZ",
      loca: "BLR",
    },
    user: User.getUsers(),
  });
};
exports.create = function (req, res) {
  return res.json({ msg: "create" });
};
