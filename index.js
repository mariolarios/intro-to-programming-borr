const today = new Date();
const thisYear = today.getFullYear();
const now = new Date();
// footer section
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
var messageForm = document.querySelector("form[name=leave_message]");
var messages_list = document.getElementById("message-list");
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formFields = e.target;
  const name = formFields.name.value;
  const email = formFields.email.value;
  const message = formFields.message.value;
  console.log(formFields.name.value);
  console.log(formFields.email.value);
  console.log(formFields.message.value);

  const newMessage = document.createElement("li");
  newMessage.classList.add("list__item");
  newMessage.innerHTML = `<div>
  <span class="strong">${JSON.stringify(message)}</span>
  <p>${now.toLocaleString()} from <a class="link" href="mailto:${JSON.stringify(
    email
  )}">${JSON.stringify(name)}</a> &nbsp;</p>
</div>`;

  messages_list.appendChild(newMessage);

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  newMessage.appendChild(removeButton);

  removeButton.addEventListener("click", function (e) {
    const entry = e.target.parentNode;
    entry.remove();
  });

  e.target.reset();
});
