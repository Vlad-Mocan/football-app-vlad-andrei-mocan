import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { join } from "path";
import { getHistory, saveMessage } from "./history.js";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static("../frontend"));

io.on("connection", (socket) => {
  socket.on("join-room", (room) => {
    socket.join(room);
    socket.emit("load-history", getHistory(room));
  });

  socket.on("send-message", (receivedMessage) => {
    saveMessage(receivedMessage.room, receivedMessage);
    io.to(receivedMessage.room).emit("receive-message", receivedMessage);
  });
});

server.listen(3000, () => {
  console.log("started at localhost:3000");
});
