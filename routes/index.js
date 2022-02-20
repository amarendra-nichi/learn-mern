var express = require("express");
var router = express.Router();
const UserCtrl = require("../controllers/UserController");
const XYZController = require("../controllers/XYZController");
const studentController = require("../controllers/studentController");
const UserController = new UserCtrl();
/* GET home page. */
router.get("/", XYZController.index);
router.get("/create", XYZController.create);
router.post("/insert", XYZController.insert);
router.post("/update", XYZController.update);
router.post("/delete", XYZController.delete);
router.get("/getAll", XYZController.getAll);
router.get("/getStudents", studentController.getAll);
router.post("/find-by-name", XYZController.TogetUserByName);
router.post("/users/:userType", UserController.userByRole);
module.exports = router;
