var express = require("express");
var router = express.Router();
var XYZController = require("../controllers/XYZController");
/* GET home page. */
router.get("/", XYZController.index);
router.get("/create", XYZController.create);
router.post("/insert", XYZController.insert);
router.post("/update", XYZController.update);
router.post("/delete", XYZController.delete);
router.get("/getAll", XYZController.getAll);

module.exports = router;
