const { Schema, SchemaTypes } = require("mongoose");

const addressSchema = new Schema({
  street: String,
  city: String,
});
const usersSchma = {
  name: String,
  role: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: 1,
    // validate: {
    //   validator: (v) => v % 2 === 0,
    //   message: (props) => props.value + " is not event",
    // },
  },
  bestfriend: { type: SchemaTypes.ObjectId, ref: "User" }, //user itself
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
  //   address:addressSchema,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => new Date(),
  },
  updatedAt: {
    type: Date,
    default: () => new Date(),
  },
};

const createUserSchema = new Schema(usersSchma);

//  schema methods are bind to every User instance
createUserSchema.methods.sayHi = function () {
  console.log("my name is" + this.name);
};

// we can define static methods like the built one User.find()
createUserSchema.statics.findByName = function (name) {
  // here we will return a query like model methods / relation in laravel
  return this.find({ name: name });
};

// query helpers
createUserSchema.query.byRole = function (role) {
  return this.where({ role: new RegExp(role, "i") });
};

// virtuals same as mutator in laravel
// it is usefull formate and combine some name

createUserSchema.virtual("birthYear").get(function () {
  return new Date().getFullYear() - this.age;
});

module.exports = createUserSchema;
