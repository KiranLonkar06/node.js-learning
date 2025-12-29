
const sumRequestHandler = (req,res)=>{
    console.log("In sum request handler",req.url);
    const body = [];
    req.on('data',chunk=>body.push(chunk));
    req.on('end',()=>{
        const bodystr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodystr);
        const bodyobj = Object.fromEntries(params);
        const result = Number(bodyobj.first) +Number(bodyobj.second);
    
        res.setHeader('Content-Type','text/html');
    res.write(`
        <html>
            <head><title>Practice set</title></head>
            <body>
                <h1>your result is ${result}</h1>
                
            </body>
        </html>
        `);
        return res.end();
    });
    
}

exports.sumRequestHandler = sumRequestHandler;