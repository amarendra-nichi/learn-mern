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
  age: Number,
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
