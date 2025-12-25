const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/abc") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<html><title>Welcome to home</title></html>");
    res.write("<body><h1>Like share subscibe</h1></body>");
    res.end();
    return ;
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<html><title>Complete code</title></html>");
    res.write("<body><h1>Checkout out products</h1></body>");
    res.end();
    return;
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<html><title>Complete  code</title></html>");
  res.write("<body><h1>Kiran Lonkar</h1></body>");
  res.end();
});
const port = 3058;

server.listen(port, () => {
  console.log("server started");
});
