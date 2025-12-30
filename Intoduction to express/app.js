
// external module
const express = require('express');
// local module
const requestHandler = require('./user');

const app = express();
app.use("/",(req,res,next)=>{
  console.log("come in first middleware",req.url,req.method);
    res.send("<p>came from first middle ware </p>")
  next();
});

app.use("/submit-details",(req,res,next)=>{
  console.log("come in another middleware",req.url,req.method);
  res.send("<p>came in another middleware</p>")
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address
     http://localhost:${PORT}`);
});