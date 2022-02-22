const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");
// const { readFileSync, writeFileSync, readFile, writeFile } = require("fs").promises; //we can write like this also
const util = require("util");
const os = require("os");
const path = require("path");
readfilePromise = util.promisify(readFile);
writefilePromise = util.promisify(writeFile);
// console.log(readFileSync("./database/Seeder/UserSeeder.js", "utf-8"));
console.log(
  readFile("./database/Seeder/UserSeeder.js", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  })
);

writeFile("./database/Seeder/StudentSeeder.js", "scafold", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

// create one file if not available then write with content , if need to apped thn pass the flag : 'a'
writeFileSync(
  "./writeFile.txt",
  readFileSync("./database/Seeder/UserSeeder.js", "utf-8"),
  {
    flag: "a",
  }
);

const start = async () => {
  try {
    const first = await readfilePromise(
      "./database/Seeder/UserSeeder.js",
      "utf-8"
    );
    await writefilePromise("./writeFile.txt", first);
  } catch (e) {
    console.log(e);
  }
  //   return new Promise((resolve, reject) => {
  //     readFile("./database/Seeder/UserSeeder.js", "utf-8", (err, result) => {
  //       if (err) {
  //         console.log(err);
  //         reject(err);
  //       }
  //       resolve(result);
  //     });
  //   });
};

console.table(os.userInfo());
const systemInformationCheck = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  hostname: os.hostname(),
  uptime: os.uptime(),
};
console.table(systemInformationCheck);
// ---------------

console.log(path.sep);
const filePath = path.join("database", "Seeder", "UserSeeder.js");
console.log(filePath);
console.log(path.basename(filePath));
const absPath = path.resolve(__dirname, "database", "Seeder", "UserSeeder.js");
console.log(absPath);
