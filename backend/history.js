const history = {
  "man-city": [],
  chelsea: [],
  "man-utd": [],
  liverpool: [],
  arsenal: [],
  spurs: [],
};

export const saveMessage = (room, message) => {
  if (history[room]) {
    history[room].push(message);
    if (history[room].length > 50) history[room].shift();
  }
};

export const getHistory = (room) => {
  return history[room] || [];
};
