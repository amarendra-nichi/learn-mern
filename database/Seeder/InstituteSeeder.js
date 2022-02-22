const { faker } = require("@faker-js/faker");
const { User } = require("../Migrations/Index");

// const dev = require("../config/dev"); //get your mongoose string //create your array. i inserted only 1 object here
const InstituteSeeder = function () {
  return {
    name: faker.random.arrayElement(["AEC", "IIT", "JEC", "GIMT"]),
    // students: [],
    address: {
      street: faker.address.cityName(),
      city: faker.address.cityName(),
    },
  };
};

const arrayInstituteSeeder = [];
for (let index = 0; index < 5; index++) {
  arrayInstituteSeeder.push(InstituteSeeder());
}

module.exports = arrayInstituteSeeder;
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
