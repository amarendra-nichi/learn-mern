var express = require("express");
var router = express.Router();
var XYZController = require("../controllers/XYZController");
/* GET home page. */
router.get("/", XYZController.index);
router.get("/create", XYZController.create);

module.exports = router;
