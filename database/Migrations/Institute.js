const { Schema, SchemaTypes } = require("mongoose");

const addressSchema = new Schema({
  street: String,
  city: String,
});
const instituteSchema = {
  name: String,
  bestfriend: SchemaTypes.ObjectId, //user itself
  hobbies: [String],
  address: addressSchema,
  createdAt: Date,
  updatedAt: Date,
};
const createInstituteSchema = new Schema(instituteSchema);
module.exports = createInstituteSchema;
