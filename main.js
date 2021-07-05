const navbar = document.querySelector(".navbar");
const hamburgerMenu = document.querySelector(".hamburgerMenu");

hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
})