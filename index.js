const today = new Date();
const thisYear = today.getFullYear();
const now = new Date();
// footer section
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerText = "Mario Larios " + thisYear;
footer.appendChild(copyright);
// skills section
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
// create remove button
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
// use fetch to show Github repos
fetch("https://api.github.com/users/mariolarios/repos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
    for (let i = 0; i < data.length; i++) {
      const project = document.createElement("li");
      project.innerHTML = `<a href="${data[i].html_url}">${data[i].name}</a>`;
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    alert(error);
  });


// const githubRequest = new XMLHttpRequest();
// githubRequest.open("GET", "https://api.github.com/users/mariolarios/repos");
// // githubRequest.onload = function () {};
// githubRequest.send();

// githubRequest.addEventListener("load", function () {
//   const repositories = JSON.parse(this.response);
//   console.log(repositories);

//   const projectSection = document.querySelector("#projects");
//   const projectList = projectSection.querySelector("ul");

//   for (let i = 0; i < repositories.length; i++) {
//     const project = document.createElement("li");
//     project.innerHTML = `<a href="${repositories[i].html_url}">${repositories[i].name}</a>`;
//     projectList.appendChild(project);
//   }
// });
