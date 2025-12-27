const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<html><title>Enter your details : </title></html>");

    res.write('<form action="/submit-details" method="POST">');

    res.write('<input type ="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for ="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for ="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="Female" />');
    res.write('<br>')
    res.write('<input type="submit" value="Submit"/>');
    res.write('</form');
    res.write('</body>');
    res.end();
    return ;
  } else if(req.url.toLowerCase() ==="/submit-details" && req.method == "POST")
  {
    const body = [];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', ()=>{
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
    });

    fs.writeFileSync('user.txt' , 'Kiran Lonkar');
    res.statusCode = 302;
    res.setHeader( 'Location' , '/' );
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<html><title>Complete  code</title></html>");
  res.write("<body><h1>Like share subscibe</h1></body>");
  res.end();
});
const port = 3058;

server.listen(port, () => {
  console.log("server started");
});
