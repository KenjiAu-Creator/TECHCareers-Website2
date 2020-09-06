// Document Element Initializations
const education = document.querySelector("#education");
const projects = document.querySelector("#projectsTitle");
const work = document.querySelector("#workExp");
const contact = document.querySelector("#contact");
const educationSection = document.querySelector(".education");
const projectsSection = document.querySelector(".projects");
const workSection = document.querySelector(".workExp");
const contactSection = document.querySelector(".contact");
const supervisorInfo = document.querySelector("#supervisor");
const bartenderInfo = document.querySelector("#bartender");
const researchInfo = document.querySelector("#research")

// Showing / Hiding main information sections
projects.addEventListener("click", () => {
  projectsSection.classList.remove("lessInfo");
  workSection.classList.add("lessInfo");
  contactSection.classList.add("lessInfo");
  educationSection.classList.add("lessInfo");
  projects.scrollIntoView();
});

education.addEventListener("click", () => {
  projectsSection.classList.add("lessInfo");
  workSection.classList.add("lessInfo");
  contactSection.classList.add("lessInfo");
  educationSection.classList.remove("lessInfo");
  education.scrollIntoView();
});

work.addEventListener("click", () => {
  projectsSection.classList.add("lessInfo");
  workSection.classList.remove("lessInfo");
  contactSection.classList.add("lessInfo");
  educationSection.classList.add("lessInfo");
  work.scrollIntoView();
});

contact.addEventListener("click", () => {
  projectsSection.classList.add("lessInfo");
  workSection.classList.add("lessInfo");
  contactSection.classList.remove("lessInfo");
  educationSection.classList.add("lessInfo");
  contact.scrollIntoView();
});

/* Extra info in Work Exp */
supervisorInfo.addEventListener("click", () => {
  const supervisorExpand = document.querySelector("#supervisor-more");
  supervisorExpand.classList.remove("lessInfo");
});

bartenderInfo.addEventListener("click", () => {
  const bartenderExpand = document.querySelector("#bartender-more");
  bartenderExpand.classList.remove("lessInfo");
});

researchInfo.addEventListener("click", () => {
  const researchExpand = document.querySelector("#research-more");
  researchExpand.classList.remove("lessInfo");
});

/* Profanity filter */
function filter(message) {
  /* Check message for any profanity
   * If it contains a swear word then return true
   * else return false
   */
  const filterArray = [];
  message = message.toLowerCase();
  messageArray = message.split(" ");
  const p = RegExp(`( ass)|^(ass)|^(shit)|( shit)|^(bitch)|( bitch)|^(bastard)|( bastard)|^(anal)|( anal)|^(blowjob)|( blowjob)|^(cock)|( cock)|( fuck)|^(fuck)|( feldercarb)|^(feldercarb)|( frack)|^(frack)|( skinjob)|^(skinjob)|( vulgacarb)|^(vulgacarb)`);
  for (const word of messageArray) {
    if (p.test(word)) {
      filterArray.push(word);
    }
  }
  return filterArray;
}

/* Contact form submit */
const form = document.querySelector("FORM");
form.addEventListener("submit", () => {
  /* Thank you to Fahad Hameed for the necessary documents on the mailTo function and how to build the href. */
  /* https://stackoverflow.com/questions/10172499/mailto-using-javascript */
  /* Also took the window.location.href code from stack overflow */
  const message = document.querySelector("TEXTAREA").value;
  const subject = document.querySelector("#subject").value;
  const name = document.querySelector("#name").value;
  const errorList = document.querySelector("#errorList");

  if (filter(message).length > 0) {
    event.preventDefault();
    const errorMessage = document.createElement("P");
    errorMessage.textContent = "Please ensure no profanity is included in your message. The filter picked up the following words:"
    const newErrorList = document.createElement("UL");
    newErrorList.setAttribute("ID", "errorList");
    newErrorList.prepend(errorMessage);
    const badWordArray = filter(message);
    for (const word of badWordArray) {
      const LI = document.createElement("LI");
      LI.textContent = word;
      newErrorList.append(LI)
    }

    form.replaceChild(newErrorList, errorList);
  }
  else {
    const emailString = `mailTo:kenji1@ualberta.ca?subject=${subject}&body=FROM:%20${name}%0D%0A${message}%0D%0A`
    window.location.href = emailString;
  }
});
