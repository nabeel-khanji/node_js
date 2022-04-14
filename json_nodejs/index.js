// const bioData = {
//   firstName: "Nabeel",
//   lastName: "Khanjee",
//   age: 23,
//   dob: "04/04/1999",
// };
// console.log("convert data into json");
// const jsonData = JSON.stringify(bioData);

// console.log(jsonData);
// console.log('parse json data');
// const objData = JSON.parse(jsonData);
// console.log(objData);
// console.log("seperate json value");
// console.log(objData['firstName']);
// console.log(objData['lastName']);
// console.log(objData['age']);
// console.log(objData['dob']);

// console.log('print object value');
// console.log(bioData.firstName);
// console.log(bioData.lastName);
// console.log(bioData.dob);
// console.log(bioData.age);

const fs = require("fs");

const bioData = {
  name: "Nabeel_Khanjee",
  age: 23,
  uni: "duet",
  office: "exventure group",
}

const jsonData = JSON.stringify(bioData);

fs.writeFile("myBio.json", jsonData, (err) => {
  console.log("file is created");
});

fs.readFile('myBio.json','utf-8',(err,data)=>{
    console.log(data);
});

// const parseData = JSON.parse(jsonData);
