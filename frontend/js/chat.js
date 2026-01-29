import { messageArea } from "./dom.js";

export const setupChat = (socket, render, currentUsername) => {
  socket.on("load-history", (history) => {
    history.forEach((msg) => {
      render(msg, currentUsername);
    });
  });

  socket.on("receive-message", (msg) => {
    render(msg, currentUsername);
  });
};
export const switchRoom = (socket, newRoom, currentRoom) => {
  if (currentRoom === newRoom) return;

  if (currentRoom) {
    socket.emit("leave-room", currentRoom);
  }

  socket.emit("join-room", newRoom);
};

export const sendMessage = (socket, room, textFromMessage, username) => {
  const messagePayload = {
    room: room,
    user: username,
    message: textFromMessage,
    senderId: socket.id,
    date: new Date().toLocaleTimeString(),
  };

  socket.emit("send-message", messagePayload);

  messageArea.value = "";
};
