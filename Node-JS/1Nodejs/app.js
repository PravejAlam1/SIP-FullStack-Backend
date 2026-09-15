const fs = require("fs");

console.log("Starting");

const data = fs.readFileSync("file.txt", "utf8");
console.log(data);

fs.writeFileSync("file.txt", "Hello Parvez");

console.log("Ending");