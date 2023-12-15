const express = require("express");
const {Server} = require('socket.io');
const http = require("http");
const app = express();
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// app.listen(5000, () => {
//   console.log("Running on port 5000.");
// });
// const http_server = http.createServer(app);
// // Export the Express API
// // module.exports = app;


