const mongoose = require("mongoose");
mongoose.set("toJSON", { virtuals: true });
mongoose.connect("mongodb://localhost:27017/learn-mern", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});
