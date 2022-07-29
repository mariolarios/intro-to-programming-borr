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
