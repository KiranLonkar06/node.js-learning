const requestHandler = (req, res)=>{
  console.log(req.url , req.method);
  if(req.url ==="/"){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
       <head><title>Practice set</title></head>
       <body>
       <h1>Welcome to calulator</h1>
       <a href = "/calculator">Go to calculator page</a>
       </body>
       </html>
      `);
      return res.end();
  }
  else if (req.url.toLowerCase() === "/calculator") {
  res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
       <head><title>Practice set</title></head>
       <body>
       <h1>404 page does not found</h1>
       <a href = "/">Go to home</a>
       </body>
       </html>
      `);
      return res.end();
}
    res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head><title>Practise Set</title></head>
      <body>
        <h1>404 Page Does not Exist</h1>
        <a href="/">Go To Home</a>
      </body>  
    <html>  
  `);    
  return res.end();
}
console.log("Request reached server");

exports.requestHandler = requestHandler;