const fs = require("fs");



const data = fs.readFileSync("data.txt","utf-8");
console.log(data);
console.log("after read a file");



fs.writeFile("data.txt","My name is nabeel", (err)=> {
    console.log(err);
    console.log("file is created");
});
fs.readFile("data.txt","utf-8",(err,data)=>{
    console.log(err);
    console.log(data);
});
console.log("after read a file");
