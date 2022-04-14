const fs = require("fs");

fs.mkdir("Nabeel",(err)=>{
    console.log(err);
    console.log("Folder is created");
});

fs.writeFile("./Nabeel/data.txt/","Challenge 2 nodejs",(err)=>{
    console.log(err);
    console.log("File is create in folder Nabeel");
});

fs.appendFile("./Nabeel/data.txt","\nKarliya hai...!",(err)=>{
    console.log(err);
    console.log("naya data add hogaya hai existing file mai ");
});

fs.readFile("./Nabeel/data.txt","utf-8",(err,data)=>{
    console.log(data);
    console.log(err);

});

fs.rename("./Nabeel/data.txt","./Nabeel/myData.txt",(err)=>{
    console.log(err);
    console.log("file ka name change hogyaa hai");
});

fs.unlink("./Nabeel/myData.txt",(err)=>{
    console.log("file delete hogaee hai");
});

fs.rmdir("./Nabeel",(err)=>{
    console.log("Folder delete hogaya hai");
});