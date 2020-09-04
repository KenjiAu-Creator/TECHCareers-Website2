// Document Element Initializations
const education = document.querySelector("#education");
const projects = document.querySelector("#projects-title");
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

/* Profanity filter */
function filter(message) {
  /* Check message for any profanity
   * If it contains a swear word then return true
   * else return false
   */
  message = message.toLowerCase();
  const p = RegExp(`( ass)|^(ass)|^(shit)|( shit)|^(bitch)|( bitch)|^(bastard)|( bastard)|^(anal)|( anal)|^(blowjob)|( blowjob)|^(cock)|( cock)|( feldercarb)|^(feldercarb)|( frack)|^(frack)|( skinjob)|^(skinjob)|( vulgacarb)|^(vulgacarb)`);
  if (p.test(message)) {
    return true;
  }
  else {
    return false;
  }
}

/* Contact form submit */
const form = document.querySelector("FORM");
form.addEventListener("submit", () => {
  /* Thank you to Fahad Hameed for the necessary documents on the mailTo function and how to build the href. */
  /* https://stackoverflow.com/questions/10172499/mailto-using-javascript */
  /* Also took the window.location.href code from stack overflow */
  const message = document.querySelector("TEXTAREA").value;
  if (!filter(message)) {
    const subject = document.querySelector("#subject").value;
    const name = document.querySelector("#name").value;
    const emailString = `mailTo:kenji1@ualberta.ca?subject=${subject}&body=FROM:%20${name}%0D%0A${message}%0D%0A`
    window.location.href = emailString;
  }
  else {
    event.preventDefault();
    alert("Please be more professional in your request. No profanity please.");
  }
});
