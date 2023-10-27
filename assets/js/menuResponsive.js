const responsiveBtn = document.querySelector("#nav-btn");
const layoutNavMenu = document.querySelector(".layout__nav");
const layoutNavResponsiveMenu = document.querySelector(
  ".layout__nav-responsive"
);

let isResponsiveMenuActive = false;

responsiveBtn.addEventListener("click", (e) => {
  layoutNavMenu.classList.remove("layout__nav--hidden");
  if (isResponsiveMenuActive) {
    layoutNavResponsiveMenu.style.opacity = 0;
    isResponsiveMenuActive = false;
  } else {
    layoutNavResponsiveMenu.style.opacity = 1;
    isResponsiveMenuActive = true;
  }
});
