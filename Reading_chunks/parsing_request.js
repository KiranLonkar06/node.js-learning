const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // ---------- GET REQUEST ----------
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");

    res.write(`
      <html>
        <head>
          <title>Enter your details</title>
        </head>
        <body>
          <form action="/submit-details" method="POST">
            <input type="text" name="username" placeholder="Enter your name" /><br><br>

            <label>
              <input type="radio" name="gender" value="Male" /> Male
            </label>

            <label>
              <input type="radio" name="gender" value="Female" /> Female
            </label>
            <br><br>

            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    `);

    res.end();
    return;
  }

  // ---------- POST REQUEST ----------
  if (req.url === "/submit-details" && req.method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log("Raw Data:", fullBody);

      const params = new URLSearchParams(fullBody);
      const bodyObj = {};

      for (const [key, value] of params.entries()) {
        bodyObj[key] = value;
      }

      console.log("Parsed Data:", bodyObj);

      // Write data asynchronously
      fs.writeFile("user.txt", JSON.stringify(bodyObj, null, 2), (err) => {
        if (err) {
          console.error(err);
        }

        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });

    return;
  }

  // ---------- FALLBACK ROUTE ----------
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>Not Found</title>
      </head>
      <body>
        <h1>Page Not Found</h1>
      </body>
    </html>
  `);
  res.end();
});

const port = 3058;
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
