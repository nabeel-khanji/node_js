const fs = require("fs");

// creating a new file 
fs.writeFileSync('read.txt','my name is nabeel');

fs.writeFileSync('read.txt',"I'm BSCS student, my name is nabeel");

fs.appendFileSync("read.txt","\nroll no 19-bscs-31")


const buf_data = fs.readFileSync("read.txt");


org_data = buf_data.toString();
console.log(org_data);

fs.renameSync("read.txt","readwrite.txt")