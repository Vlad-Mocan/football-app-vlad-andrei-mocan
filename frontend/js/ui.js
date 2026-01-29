import { mainContainer, messageLogContainer, secondHeading } from "./dom.js";

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
  mainContainer.classList.remove("hidden");
  secondHeading.classList.add("hidden");
};

export const renderMessage = (message, currentUsername) => {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  console.log(message);
  if (message.user == currentUsername) {
    messageDiv.classList.add("me");
  } else {
    messageDiv.classList.add("them");
  }

  const messageDetailsDiv = document.createElement("div");
  messageDetailsDiv.classList.add("message-details");

  const usernameSpan = document.createElement("span");
  const usernameStrong = document.createElement("strong");
  usernameStrong.textContent = `${message.user}`;

  usernameSpan.appendChild(usernameStrong);

  const bulletSpan = document.createElement("span");
  bulletSpan.textContent = "•";

  const timeSentSpan = document.createElement("span");
  timeSentSpan.textContent = message.date;

  messageDetailsDiv.appendChild(usernameSpan);
  messageDetailsDiv.appendChild(bulletSpan);
  messageDetailsDiv.appendChild(timeSentSpan);

  messageDiv.appendChild(messageDetailsDiv);

  const messageTextContent = document.createElement("p");
  messageTextContent.textContent = message.message;
  messageDiv.appendChild(messageTextContent);

  messageLogContainer.appendChild(messageDiv);

  // <div class="message me">
  //           <div class="message-details">
  //             <span><strong>User Test</strong></span>
  //             <span>&bull;</span>
  //             <span>30 minutes ago</span>
  //           </div>
  //           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, natus
  //           nam? Provident quasi adipisci, ipsa totam in quibusdam, ad mollitia
  //           distinctio eaque voluptatum voluptas non voluptate debitis aliquam
  //           perferendis labore.
  //         </div>
};
