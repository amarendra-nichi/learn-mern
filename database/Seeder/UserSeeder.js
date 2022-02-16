const { faker } = require("@faker-js/faker");
const { User } = require("../Migrations/Index");

// const dev = require("../config/dev"); //get your mongoose string //create your array. i inserted only 1 object here
const UserSeeder = function () {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    age: Math.floor(Math.random() * 100),
    hobbies: faker.random.arrayElements(["music", "bla", "bla"]),
    address: {
      street: faker.address.cityName(),
      city: faker.address.cityName(),
    },
  };
};

module.exports = new User(UserSeeder());
//connect mongoose

//save your data. this is an async operation //after you make sure you seeded all the Users, disconnect automatically
// Users.map(async (p, index) => {
//   await p.save((err, result) => {
//     if (index === Users.length - 1) {
//       console.log("DONE!");
//       mongoose.disconnect();
//     }
//   });
// });
