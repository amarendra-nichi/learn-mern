const User = require("../models/User");
const helper= require("../helpers/helpers")
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
  var myins = await User.getUsers();
  return res.json({
    user: myins,
  });
};
exports.insert =async  function (req, res) {
 let data=await User.insert(req.body);
  return res.json({ msg: "Inserted",data:data });
};

exports.update = async  function (req, res) {
  const Data=await User.getUsersById(req.body.id);
  let updateData={
    name:req.body.name==null?Data.name:req.body.name,
    location:req.body.location==null?Data.location:req.body.location,
    email:req.body.email==null?Data.email:req.body.email,
  }
  let Update=await User.update( req.body.id,updateData);
  return res.json({ msg: "update",data:updateData });
};
exports.delete =async function (req, res) {
  let del=await User.delete(req.body.id)
  return res.json({ msg: "deleted" ,data:del});
};
