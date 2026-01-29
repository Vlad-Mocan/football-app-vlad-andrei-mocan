"use strict";

import { navButtons } from "./dom.js";
import { updateTheme, updateHeading } from "./ui.js";

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
