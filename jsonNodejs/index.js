const fs = require('fs');
const data = {
    name : "yogesh",
    age : 23,
    channel : "Hello world",
};
// console.log(data.age);
const jsondata = JSON.stringify(data);
// const objData = JSON.parse(jsondata);
// console.log(objData);
// console.log(jsondata);
// fs.writeFile("json1.json",jsondata,(err)=>{
//     console.log("done writing");
// })
 fs.readFile("json1.json","utf-8",(err,data) => {
    console.log("done reading");
const orgData = JSON.parse(data);
console.log(data);
console.log(orgData);
 });