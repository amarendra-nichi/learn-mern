var express = require("express");
var router = express.Router();
const auth = require("../middleware/Auth");
const UserCtrl = require("../controllers/UserController");
const XYZController = require("../controllers/XYZController");
const studentController = require("../controllers/studentController");
const UserController = new UserCtrl();
/* GET home page. */
router.get("/", XYZController.index);
router.get("/check", function (req, res) {
  console.log(req);
  //   console.log(req.url);
});
router.get("/create", XYZController.create);
router.post("/insert", XYZController.insert);
router.post("/update", XYZController.update);
router.post("/delete", XYZController.delete);
router.get("/getAll", auth, XYZController.getAll);
router.get("/getStudents", studentController.getAll);
router.post("/find-by-name", XYZController.TogetUserByName);
router.post("/users/:userType", UserController.userByRole);
router.post("/singleUser", XYZController.singleUser);

module.exports = router;
