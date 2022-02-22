function Logger(req, res, next) {
  if (req.query?.admin == "true") {
    console.log("Log");
    next();
  } else {
    return res.json({ msg: "404" });
  }
}

module.exports = Logger;
