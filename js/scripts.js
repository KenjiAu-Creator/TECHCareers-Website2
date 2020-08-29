const education = document.querySelector("#education");

education.addEventListener("click", () => {
  const educationSection = document.querySelector(".education");
  educationSection.classList.remove("screen-reader-text");
});