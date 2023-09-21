const toggleMenu = document.querySelector("#toggleMenue");
const navLinks = document.querySelector("#nav-links");
const crossMenu = document.querySelector("#crossMenu");
toggleMenu.addEventListener("click", () => {
  navLinks.parentElement.classList.remove("none-display");
  crossMenu.classList.remove("none-display");
  navLinks.parentElement.classList.add("flex-display");
});

crossMenu.addEventListener("click", () => {
  crossMenu.classList.add("none-display");
  navLinks.parentElement.classList.remove("flex-display");
});
