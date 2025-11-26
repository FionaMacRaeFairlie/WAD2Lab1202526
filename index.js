import http from "http";

const server = http.createServer((req, res) => {
  // normalize url by removing querystring, optional trailing slash, and making it lowercase
  let path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();

  switch (path) {
    case "":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Homepage");
      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About");
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      break;
  }
});

server.listen(3000);

console.log("Server started on localhost:3000; press Ctrl-C to terminate....");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end("Hello from my Node.js application!");
//   })
//   .listen(3000);
// console.log("Server started on port 3000, ctrl^c to quit.");
