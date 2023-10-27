const responsiveBtn = document.querySelector("#nav-btn");
const layoutNavMenu = document.querySelector(".layout__nav");

responsiveBtn.addEventListener("click", (e) => {
  console.log("MENUUUU");
  layoutNavMenu.classList.toggle("responsive__nav--show");
});
