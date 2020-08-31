// Document Element Initializations
const education = document.querySelector("#education");
const projects = document.querySelector("#projects");
const work = document.querySelector("#work-exp");
const contact = document.querySelector("#contact");
const educationSection = document.querySelector(".education");
const projectsSection = document.querySelector(".projects");
const workSection = document.querySelector(".work-exp");
const contactSection = document.querySelector(".contact");
const supervisorInfo = document.querySelector("#supervisor");
const bartenderInfo = document.querySelector("#bartender");
const researchInfo = document.querySelector("#research")

// Showing / Hiding main information sections
projects.addEventListener("click", () => {
  projectsSection.classList.remove("less-info");
  workSection.classList.add("less-info");
  contactSection.classList.add("less-info");
  educationSection.classList.add("less-info");
  projects.scrollIntoView();
});

education.addEventListener("click", () => {
  projectsSection.classList.add("less-info");
  workSection.classList.add("less-info");
  contactSection.classList.add("less-info");
  educationSection.classList.remove("less-info");
  education.scrollIntoView();
});

work.addEventListener("click", () => {
  projectsSection.classList.add("less-info");
  workSection.classList.remove("less-info");
  contactSection.classList.add("less-info");
  educationSection.classList.add("less-info");
  work.scrollIntoView();
});

contact.addEventListener("click", () => {
  projectsSection.classList.add("less-info");
  workSection.classList.add("less-info");
  contactSection.classList.remove("less-info");
  educationSection.classList.add("less-info");
  contact.scrollIntoView();
});

/* Extra info in Work Exp */
supervisorInfo.addEventListener("click", () => {
  const supervisorExpand = document.querySelector("#supervisor-more");
  supervisorExpand.classList.remove("less-info"); 
});

bartenderInfo.addEventListener("click", () => {
  const bartenderExpand = document.querySelector("#bartender-more");
  bartenderExpand.classList.remove("less-info");
});

researchInfo.addEventListener("click", () => {
  const researchExpand = document.querySelector("#research-more");
  researchExpand.classList.remove("less-info");
});

/* Contact form submit */
const form = document.querySelector("FORM");
form.addEventListener("submit", () => {
  const message = document.querySelector("TEXTAREA");
  console.log(message.value);
});
