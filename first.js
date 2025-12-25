console.log("Kiran Lonkar");

const fs = require('fs');

fs.writeFile("output.text","Writting file in js",(err) => {
  if(err) console.log("error occured");
  else console.log("file written succesfully")
});