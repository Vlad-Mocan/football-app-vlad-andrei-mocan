export const updateHeading = (team) => {
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

export const updateTheme = (theme) => {
  document.body.className = "";
  document.body.classList.add(`theme-${theme}`);
};
