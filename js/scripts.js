const education = document.querySelector("#education");
const projects = document.querySelector("#projects");
const work = document.querySelector("#work-exp");
const contact = document.querySelector("#contact");
const educationSection = document.querySelector(".education");
const projectsSection = document.querySelector(".projects");
const workSection = document.querySelector(".work-exp");
const contactSection = document.querySelector(".contact");

projects.addEventListener("click", () => {
  projectsSection.classList.remove("less-info");
  workSection.classList.add("less-info");
  contactSection.classList.add("less-info");
  educationSection.classList.add("less-info");
});

education.addEventListener("click", () => {
  projectsSection.classList.add("less-info");
  workSection.classList.add("less-info");
  contactSection.classList.add("less-info");
  educationSection.classList.remove("less-info");
});

work.addEventListener("click", () => {
  projectsSection.classList.add("less-info");
  workSection.classList.remove("less-info");
  contactSection.classList.add("less-info");
  educationSection.classList.add("less-info");
});

contact.addEventListener("click", () => {
  projectsSection.classList.add("less-info");
  workSection.classList.add("less-info");
  contactSection.classList.remove("less-info");
  educationSection.classList.add("less-info");
});