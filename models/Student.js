var mongoose  =  require("mongoose");  
  
const Students = mongoose.model("Students", {
  name: String,
  description: String,
  created_at:Date
});
exports.getStudents = async function () {
  return await Students.find({})
}
//    new Students({ 
//     name: 'React.js',
//     description: 'for building UI',
//     created_at: '2021-09-05' },)  .save()


