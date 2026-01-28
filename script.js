"use strict";

const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const selectedTeam = event.currentTarget.dataset.team;

    updateTheme(selectedTeam);
    console.log(selectedTeam);
  });
});

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const selectedTeam = event.currentTarget.dataset.team;

    updateHeading(selectedTeam);
  });
});

const updateTheme = (theme) => {
  document.body.className = "";
  document.body.classList.add(`theme-${theme}`);
};

const updateHeading = (team) => {
  let teamName;
  const mainHeader = document.querySelector(".main-heading");
  switch (team) {
    case "man-utd":
      teamName = "MANCHESTER UNITED";
      break;
    case "man-city":
      teamName = "MANCHESTER CITY";
      break;
    default:
      teamName = team;
  }

  mainHeader.textContent = teamName;
};
