const student = require("../models/Student");
const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("Studentdata3.csv");
const mongodb = require("mongodb").MongoClient;

exports.getAll = async function (req, res) {
  const myins = await student.getStudents();
  // const jsonData = [ { id: 1,
  //   name: 'Node.js',
  //   description: 'JS web applications',
  //   created_at: '2021-09-02' },
  // { id: 2,
  //   name: 'Vue.js',
  //   description: 'for building UI',
  //   created_at: '2021-09-05' },
  // { id: 3,
    // name: 'Angular.js',
    // description: 'for building mobile & desktop web app',
    // created_at: '2021-09-08' } ];
//  var jsonData =(JSON.stringify(myins)) 
//  console.log(jsonData)
// .toArray((err, jsonData) => {
//         if (err) throw err;
//         console.log(data); 
// fastcsv
//   .write(myins, { headers: true })
//   .on("finish", function() {
//     console.log("Write to CSV successfully!");
//   })
//   .pipe(ws);
let url = "mongodb://localhost:27017/";
mongodb.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    
    if (err) throw err;
    client
      .db("learn-mern")
      .collection("students")
      .find({})
      .toArray((err, data) => {
        if (err) throw err;
        console.log(data,"KKK");
        fastcsv
          .write(data, { headers: true })
          .on("finish", function() {
            console.log("Write to bezkoder_mongodb_fastcsv.csv successfully!");
          })
          .pipe(ws);
      });
  }
);
  return res.json({
    data: ws,
  });
};
