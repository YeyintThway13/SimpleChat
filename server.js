const express = require("express");
const socketIO = require("socket.io");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const server = app.listen(3000, () => {
  console.log("Your server is up and runninggg on port 3000");
});

const io = socketIO(server);

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    // socket.emit("")
    io.sockets.emit("rMessage", data);
  });
  socket.on("type", (data) => {
    socket.broadcast.emit("rType", data);
  });
});
