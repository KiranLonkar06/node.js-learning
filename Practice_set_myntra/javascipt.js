const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");

  if(req.url ==='/home'){
    res.write('<h1>Welcome to home</h1>');
    return res.end();
  }else if(req.url ==='/men'){
    res.write('<h1>Welcome to men  section</h1>');
    return res.end();
  }else if(req.url ==='/women'){
    res.write('<h1>welcome to female section</h1>');
    return res.end();
  }else if(req.url ==='/kids'){
    res.write('<h1>welcome to kids section</h1>');
    return res.end();
  }else if(req.url ==='/elders'){
    res.write('<h1>welcome to elder section</h1>');
    return res.end();
  }
  res.write(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Myntra</title>
  </head>

  <body>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/elders">Elders</a></li>
      </ul>
    </nav>
  </body>
</html>
`);

  res.end();
});

server.listen(3001, () => {
  console.log("server running on address http://localhost:3001");
});
