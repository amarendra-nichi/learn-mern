const mongoose = require("mongoose");
const { User } = require("./UserSeeder");

mongoose
  .connect("mongodb://localhost:27017/learn-mern", { useNewUrlParser: true })
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });

function* run() {
  yield User.save().then(() => {
    mongoose.disconnect();
  });
}

let generatorFunc;
async function doTheLoop() {
  generatorFunc = run();
  do {
    await generatorFunc.next();
  } while (generatorFunc.next() !== true);
}

// new User(UserSeeder).save().then(function (res) {
//   console.log(res);
//   if (index === Users.length - 1) {
//     console.log("DONE!");
//     mongoose.disconnect();
//   }
// });
