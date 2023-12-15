const express = require("express");

const app = express();


// const cors = require("cors");
const {Server} = require('socket.io');
const http = require("http");

// const PORT = 5000;

const http_server = http.createServer(app);
// app.use(cors())


// app.get("/", (req, res) => {
//   res.send("Express on Vercel");
// });

http_server.get("/", (req, res) => {
  res.send("Express on myServer");
});



// app.listen(5000, () => {
//   console.log("Running on port 5000.");
// });
http_server.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
// module.exports = app;
module.exports = http_server;

