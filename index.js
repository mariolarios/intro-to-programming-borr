const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerText = "Mario Larios " + thisYear;
footer.appendChild(copyright);

const skills = ["Javascript", "HTML", "CSS"];
const skillsSection = document.getElementById("skills");
const skillsList = document.getElementById("skills-list");

skills.forEach((skill) => {
  const skillItem = document.createElement("li");
  skillItem.innerText = skill;
  skillsList.appendChild(skillItem);
});

const messageForm = document.getElementsByName("leave_message");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const { name, email, message } = e.target;
  addMessageToList({
    name: name.value,
    email: email.value,
    message: message.value,
  });

  messageForm.reset();
});

const messageList = document.getElementById("message-list");

const addMessageToList = ({ name, email, message }) => {
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
        <span>
        <a href="mailto:${email}">${name}</a>
        wrote: ${message} 
        <button onclick="removeButton(${id})" type="button" id="removeButton"> Remove </button>
        </span>
        `;
  const removeButton = document.getElementById("removeButton");

  messageList.appendChild(newMessage);
  document.getElementById("messages").classList.remove("hideSection");
};
