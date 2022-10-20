const themeBtn = document.querySelector(".theme-btn");

const toggleBurger = document.getElementsByClassName("toggle-btn")[0];
const navMenu = document.getElementsByClassName("topCenter")[0];

themeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("dark-theme");
});

toggleBurger.addEventListener("click", () => {
  !navMenu.classList.contains("active")
    ? navMenu.classList.add("active")
    : navMenu.classList.remove("active");
});
