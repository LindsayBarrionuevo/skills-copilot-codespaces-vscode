// Create web server
// Create a server that sends a response to the browser
// when the request is made to the path /comments.
// The response should be an array of comments.
// The server should listen on port 8000.

const http = require("http");

const comments = [
  { username: "Alice", comment: "I love apples!" },
  { username: "Bob", comment: "Where are the apples?" },
  { username: "Charlie", comment: "Have you tried the apples?" },
];

const server = http.createServer((req, res) => {
  if (req.url === "/comments") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(comments));
  }
});

server.listen(8000);
