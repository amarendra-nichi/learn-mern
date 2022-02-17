const { Schema, SchemaTypes } = require("mongoose");

const addressSchema = new Schema({
  street: String,
  city: String,
});
const usersSchma = {
  name: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: 1,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => props.value + " is not event",
    },
  },
  bestfriend: SchemaTypes.ObjectId, //user itself
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
module.exports = createUserSchema;
