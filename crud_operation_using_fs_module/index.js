const fs =require("fs"); 

// fs.mkdirSync("Nabeel");
fs.writeFileSync("Nabeel/bio.txt","my name is nabeel");
fs.appendFileSync("Nabeel/bio.txt","my Roll n0 is 31");
const org_data = fs.readFileSync("Nabeel/bio.txt", "utf-8");
console.log(org_data);

fs.renameSync("Nabeel/bio.txt", "Nabeel/mybio.txt");

// fs.unlinkSync("Nabeel/mybio.txt");