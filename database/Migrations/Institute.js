const { Schema, SchemaTypes } = require("mongoose");

const addressSchema = new Schema({
  street: String,
  city: String,
});
const instituteSchema = {
  name: String,
  students: [{ type: SchemaTypes.ObjectId, ref: "User" }], //user itself
  address: addressSchema,
  createdAt: Date,
  updatedAt: Date,
};
const createInstituteSchema = new Schema(instituteSchema);
module.exports = createInstituteSchema;
