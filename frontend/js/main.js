"use strict";

import { sendMessage, setupChat, switchRoom } from "./chat.js";
import { formElement, messageArea, navButtons } from "./dom.js";
import { updateTheme, updateHeading, renderMessage } from "./ui.js";

const socket = io();
let currentRoom = null;
const username = prompt("Please choose a username (TESTING STAGE)" || "Anonim");

setupChat(socket, renderMessage, username);

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const selectedTeam = event.currentTarget.dataset.team;

    updateTheme(selectedTeam);
    switchRoom(socket, selectedTeam, currentRoom);
    currentRoom = selectedTeam;
  });
});

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const selectedTeam = event.currentTarget.dataset.team;

    updateHeading(selectedTeam);
  });
});

messageArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();

    formElement.requestSubmit();
  }
});

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  const textFromMessage = data.get("msg");

  sendMessage(socket, currentRoom, textFromMessage, username);
});
