const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use((req,res,next)=>{
    console.log("First dummy middle ware", req.url,req.method);
    next();
});

app.use((req,res,next)=>{
    console.log("second dummy middle ware",req.url,req.method);
    next();
});

// app.use((req ,res ,next)=>{
//     console.log("third middle ware",req.url,req,method);
//     res.send("<h1>Welcome to complete coding</h1>")
// });

app.get("/",(req,res,next)=>{
    console.log("handling slash for get ",req.url,req.method);
    res.send(`<h1>Welcome to complete coding </h1>`)
    
});

app.get("/contact-us",(req,res,next)=>{
    console.log("handling contact us for get ",req.url,req.method);
    res.send(`
        <h1>plz give your details </h1>
        <form action ="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your name"/>
            <input type="email" name="email" placeholder="Enter your email"/>
            <input type="Submit" />
        </form>
        `)  
    next();
});

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
    console.log("First handling",req.url,req.method,req.body);
    next();
})

app.post("/contact-us",(req,res,next)=>{
    console.log("Handling /contact-us for post ",req.url,req.method,req.body);
    res.send(`<h1>We will contact you shortly</h1>`);
});

const PORT = 3002;
app .listen(PORT , ()=>{
    console.log(`server running on address http://localhost:${PORT}`);
})