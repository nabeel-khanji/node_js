import { writeFile, appendFile, readFile } from "fs";
writeFile("data.txt","today is awesome day",(err)=> {
    console.log("file is created");
    console.log(console.err);
});

appendFile("data.txt","ajj uni nahi jana hai ",(err)=> {
    console.log("more data is added");
    console.log(err);
});

readFile("data.txt","utf-8",(err,data)=>{
    console.log(data);
});