const layoutNav = document.querySelector(".layout__nav");
const bgCanvas = document.querySelector(".canvas__background");
const lnCanvas = document.querySelector(".canvas__lines");
const mediaResponsiveBtn = document.querySelector("#nav-btn");
const mediaLayoutNavMenu = document.querySelector(".layout__nav");
const mediaLayoutNavResponsiveMenu = document.querySelector(
  ".layout__nav-responsive"
);
let isMediaStarted = true;
let screenWidth = window.matchMedia("(max-width: 1280px)");
let isMediaResponsiveMenuActive = false;
let audioMenuResponsive = new Audio("assets/audio/menu.mp3");
layoutNav.style.transitionDuration = "300ms";

mediaResponsiveBtn.addEventListener("click", (e) => {
  audioMenuResponsive.play();
  layoutNav.classList.remove("layout__nav--hidden");
  if (isMediaResponsiveMenuActive) {
    mediaLayoutNavResponsiveMenu.style.opacity = 0;
    isMediaResponsiveMenuActive = false;
    layoutNav.style.pointerEvents = "none";
    mediaResponsiveBtn.classList.remove("nav__responsive-btn--active");
  } else {
    mediaLayoutNavResponsiveMenu.style.opacity = 1;
    isMediaResponsiveMenuActive = true;
    layoutNav.style.pointerEvents = "all";
    mediaResponsiveBtn.classList.add("nav__responsive-btn--active");
  }
});

window.addEventListener("resize", (e) => {
  screenWidth = window.matchMedia("(max-width: 1280px)");

  if (isMediaStarted) {
    if (screenWidth.matches) {
      mediaResponsiveBtn.classList.remove("nav__responsive-btn--active");
      mediaLayoutNavResponsiveMenu.style.opacity = 0;
      isMediaResponsiveMenuActive = false;
      layoutNav.style.pointerEvents = "none";
      mediaLayoutNavMenu.setAttribute("pointer-events", "all");
      layoutNav.classList.add("layout__nav--hidden");
      mediaResponsiveBtn.setAttribute("pointer-events", "all");
      mediaResponsiveBtn.classList.remove("nav__responsive-btn--hidden");
    } else {
      mediaResponsiveBtn.classList.remove("nav__responsive-btn--active");
      mediaLayoutNavResponsiveMenu.style.opacity = 1;
      isMediaResponsiveMenuActive = false;
      layoutNav.style.pointerEvents = "all";
      mediaLayoutNavMenu.setAttribute("pointer-events", "all");
      layoutNav.classList.remove("layout__nav--hidden");
      mediaResponsiveBtn.setAttribute("pointer-events", "none");
      mediaResponsiveBtn.classList.add("nav__responsive-btn--hidden");
    }
  }
});

screenWidth = window.matchMedia("(max-width: 1280px)");

if (screenWidth.matches) {
  mediaLayoutNavResponsiveMenu.style.opacity = 0;
  isMediaResponsiveMenuActive = false;
  layoutNav.style.pointerEvents = "none";
  mediaLayoutNavMenu.setAttribute("pointer-events", "all");
  layoutNav.classList.add("layout__nav--hidden");
  mediaResponsiveBtn.setAttribute("pointer-events", "all");
  mediaResponsiveBtn.classList.remove("nav__responsive-btn--hidden");
} else {
  mediaResponsiveBtn.setAttribute("pointer-events", "none");
  mediaResponsiveBtn.classList.add("nav__responsive-btn--hidden");
}

layoutNav.classList.remove("layout__nav--hidden");
bgCanvas.classList.remove("canvas__background--hidden");
lnCanvas.classList.remove("canvas__lines--hidden");
