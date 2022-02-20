const mongoose = require("mongoose");
const UserSeeder = require("./UserSeeder");
const { User, Institute } = require("../Migrations/Index");

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
  yield User.insertMany(UserSeeder).then((res, err) => {
    console.log(res);
    mongoose.disconnect();
  });
}

const generatorFunc = run();
generatorFunc.next();

// new User(UserSeeder).save().then(function (res) {
//   console.log(res);
//   if (index === Users.length - 1) {
//     console.log("DONE!");
//     mongoose.disconnect();
//   }
// });
