const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req.url,  req.method , req.headers);

  if(req.url ==='/'){
    res.setHeader('content-Type' , 'text/html');
    RegExp.write('<html>');
    res.write('<head><title>Complete coding</title></head>  ');
    res.write('<body><h1>Enter your details: </h1>');
    res.write('<form>');
    res.write('input type="text" name ="username" placeholder="enter your name"');
    
    res.write('</form>');
    res.write('</body>');
    res.write('<html>');
    return res.end();
  }
  // res.setHeader('content-Type' , 'text/html');
  //   RegExp.write('<html>');
  //   res.write('<head><title>Complete coding</title></head>  ');
  //   res.write('<body><h1>Welcome to Home</h1></body>');
  //   res.write('<html>');
  //   return res.end();
})