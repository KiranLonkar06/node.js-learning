const http = require('http');

const server = http.createServer( (req,res)=>{
  console.log(req);
  
});
const port = 3058;

server.listen(port,() => {
  console.log("server started");
});
