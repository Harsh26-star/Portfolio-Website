const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
