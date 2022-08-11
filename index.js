const today = new Date();
const thisYear = today.getFullYear();
const messageForm = document.querySelector("form[name=leave_message]");

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
/// messages section

var names = document.getElementById("name").innerHTML;
var emails = document.getElementById("email").innerHTML;
var messages = document.querySelector("#messages");
var button = document.getElementById("submit");
var messages_list = document.getElementById("message-list");
const now = new Date();

messageForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newMessage = document.createElement("li");
  newMessage.classList.add("list__item");
  newMessage.innerHTML = `<div>
   <span class="strong">${document.querySelector("#messages")}</span>
   <p>${now.toLocaleString()} from <a class="link" href="mailto:${
    emails.value
  }">${names.value}</a> &nbsp;</p>
 </div>`;

  messages_list.appendChild(newMessage);
});
