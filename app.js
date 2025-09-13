const buttonmenu = document.querySelector("#buttonmenu");
const menu = document.querySelector("#menu");
const closemenu = document.querySelector("#closemenu");
const headerweb = document.querySelector("#headerweb");
buttonmenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
closemenu.addEventListener("click", () => {
  menu.classList.add("hidden");
});




