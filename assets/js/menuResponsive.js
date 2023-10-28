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
    layoutNavMenu.style.pointerEvents = "none";
  } else {
    layoutNavResponsiveMenu.style.opacity = 1;
    isResponsiveMenuActive = true;
    layoutNavMenu.style.pointerEvents = "all";
  }
});

window.addEventListener("resize", (e) => {
  let screenWidth = window.matchMedia("(min-width: 1280px)");

  if (screenWidth.matches) {
    layoutNavResponsiveMenu.style.opacity = 1;
    isResponsiveMenuActive = true;
    layoutNavMenu.style.pointerEvents = "all";
  } else {
    layoutNavResponsiveMenu.style.opacity = 0;
    isResponsiveMenuActive = false;
    layoutNavMenu.style.pointerEvents = "none";
  }
});
