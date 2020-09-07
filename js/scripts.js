// Document Element Initializations
/* Section Headers */
const projects = document.querySelector("#projectsTitle");
const education = document.querySelector("#education");
const work = document.querySelector("#workExp");
const contact = document.querySelector("#contact");

/* Section title animations */
const iconPluses = document.querySelectorAll(".iconPlus");
const iconMinuses = document.querySelectorAll(".iconMinus");
const checkBoxes = document.querySelectorAll(".checkbox")

// Showing / Hiding main information sections
/* Project section */
projects.addEventListener("click", () => {
  const projectsSection = document.querySelector(".projects");
  if (!checkBoxes[0].checked) {
    checkBoxes[0].checked = true;
  }
  else {
    checkBoxes[0].checked = false;
  }
  if (checkBoxes[0].checked) {
    projectsSection.classList.remove("lessInfo");
    iconPluses[0].classList.add("iconHidden");
    iconMinuses[0].classList.remove("iconHidden");
    projects.scrollIntoView();
  }
  else {
    projectsSection.classList.add("lessInfo");
    iconPluses[0].classList.remove("iconHidden");
    iconMinuses[0].classList.add("iconHidden");
    projects.scrollIntoView();
  }
});
/* Education Section */
education.addEventListener("click", () => {
  const educationSection = document.querySelector(".education");
  if (!checkBoxes[1].checked) {
    checkBoxes[1].checked = true;
  }
  else {
    checkBoxes[1].checked = false;
  }
  if (checkBoxes[1].checked) {
    educationSection.classList.remove("lessInfo");
    iconPluses[1].classList.add("iconHidden");
    iconMinuses[1].classList.remove("iconHidden");
    education.scrollIntoView();
  }
  else {
    educationSection.classList.add("lessInfo");
    iconPluses[1].classList.remove("iconHidden");
    iconMinuses[1].classList.add("iconHidden");
    education.scrollIntoView();
  }
});
/* Work experience section */
work.addEventListener("click", () => {
  const workSection = document.querySelector(".workExp");
  if (!checkBoxes[2].checked) {
    checkBoxes[2].checked = true;
  }
  else {
    checkBoxes[2].checked = false;
  }
  if (checkBoxes[2].checked) {
    workSection.classList.remove("lessInfo");
    iconPluses[2].classList.add("iconHidden");
    iconMinuses[2].classList.remove("iconHidden");
    work.scrollIntoView();
  }
  else {
    workSection.classList.add("lessInfo");
    iconPluses[2].classList.remove("iconHidden");
    iconMinuses[2].classList.add("iconHidden");
    work.scrollIntoView();
  }
});

/* Contact Section */
contact.addEventListener("click", () => {
  const contactSection = document.querySelector(".contact");
  if (!checkBoxes[3].checked) {
    checkBoxes[3].checked = true;
  }
  else {
    checkBoxes[3].checked = false;
  }
  if (checkBoxes[3].checked) {
    contactSection.classList.remove("lessInfo");
    iconPluses[3].classList.add("iconHidden");
    iconMinuses[3].classList.remove("iconHidden");
    contact.scrollIntoView();
  }
  else {
    contactSection.classList.add("lessInfo");
    iconPluses[3].classList.remove("iconHidden");
    iconMinuses[3].classList.add("iconHidden");
    contact.scrollIntoView();
  }
});

/* Extra info in Work Experience to expand */
/* Work Experience Content */
const supervisorInfo = document.querySelector("#supervisor");
const bartenderInfo = document.querySelector("#bartender");
const researchInfo = document.querySelector("#research");

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
  const newErrorList = document.createElement("UL");
  newErrorList.setAttribute("ID", "errorList");
  const error = document.createElement("p");
  error.textContent = "Errors detected, please fix the following errors before submission:";
  newErrorList.append(error);

  /* Check for empty input */
  if (name == "") {
    const errorMessage = document.createElement("P");
    errorMessage.textContent = "Please fill in your name.";
    newErrorList.append(errorMessage);
  }
  if (subject == "") {
    const errorMessage = document.createElement("P");
    errorMessage.textContent = "Please fill in a subject.";
    newErrorList.append(errorMessage);
  }
  if (message == "") {
    const errorMessage = document.createElement("P");
    errorMessage.textContent = "Please fill in a message.";
    newErrorList.append(errorMessage);
  }
  /* Check for profanity */
  if (filter(message).length > 0) {
    event.preventDefault();
    const errorMessage = document.createElement("P");
    errorMessage.textContent = "Please ensure no profanity is included in your message. The filter picked up the following words:";
    newErrorList.append(errorMessage);
    const badWordArray = filter(message);
    for (const word of badWordArray) {
      const LI = document.createElement("LI");
      LI.textContent = word;
      newErrorList.append(LI)
    }
  }
  if (newErrorList.childElementCount > 0 ) {
    event.preventDefault();
    form.replaceChild(newErrorList, errorList);
  }
  else {
    const emailString = `mailTo:kenji1@ualberta.ca?subject=${subject}&body=FROM:%20${name}%0D%0A${message}%0D%0A`
    window.location.href = emailString;
  }
});
