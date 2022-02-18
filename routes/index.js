var express = require("express");
var router = express.Router();
var XYZController = require("../controllers/XYZController");
var studentController=require("../controllers/studentController")
/* GET home page. */
router.get("/", XYZController.index);
router.get("/create", XYZController.create);
router.post("/insert", XYZController.insert);
router.post("/update", XYZController.update);
router.post("/delete", XYZController.delete);
router.get("/getAll", XYZController.getAll);
router.get("/getStudents", studentController.getAll);
module.exports = router;
