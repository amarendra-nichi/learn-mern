var express = require("express");
const UserController = require("../controllers/UserController");
var router = express.Router();
var XYZController = require("../controllers/XYZController");
/* GET home page. */
router.get("/", XYZController.index);
router.get("/create", XYZController.create);
router.get("/user", function () {
  new UserController();
});

module.exports = router;
