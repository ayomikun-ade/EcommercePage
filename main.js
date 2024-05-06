const menuIcon = document.querySelector(".menu-icon");
const backdrop = document.querySelector(".backdrop");
const navLinks = document.querySelector(".nav-links");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", () => {
  navLinks.classList.add("flex");
  navLinks.classList.remove("hidden");
  backdrop.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("flex");
  navLinks.classList.add("hidden");
  backdrop.classList.add("hidden");
});

backdrop.addEventListener("click", () => {
  navLinks.classList.remove("flex");
  navLinks.classList.add("hidden");
  backdrop.classList.add("hidden");
});
