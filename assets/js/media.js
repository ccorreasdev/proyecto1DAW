const explore = document.querySelector("#explore");
const audio = document.querySelector("#audio");
const video = document.querySelector("#video");
const layoutNav = document.querySelector(".layout__nav");
const videoContainer = document.querySelector(".home__video-container");
const bgCanvas = document.querySelector(".canvas__background");
const lnCanvas = document.querySelector(".canvas__lines");
const exploreIcon = document.querySelector(".home__explore-icon");
const homeTitle = document.querySelector(".home__title");
const layoutModal = document.querySelector(".layout__modal");
const mediaResponsiveBtn = document.querySelector("#nav-btn");
const mediaLayoutNavMenu = document.querySelector(".layout__nav");
const mediaLayoutNavResponsiveMenu = document.querySelector(
  ".layout__nav-responsive"
);
let isMediaStarted = false;
let screenWidth;

let isMediaResponsiveMenuActive = false;

mediaResponsiveBtn.addEventListener("click", (e) => {
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

document.body.style.overflow = "hidden";

explore.addEventListener("click", (e) => {
  isMediaStarted = true;
  layoutNav.style.transitionDuration = "5s";
  document.body.style.overflow = "auto";
  audio.play();
  video.play();
  let screenWidth = window.matchMedia("(max-width: 1280px)");

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
  videoContainer.classList.remove("home__video-container--hidden");
  bgCanvas.classList.remove("canvas__background--hidden");
  lnCanvas.classList.remove("canvas__lines--hidden");
  exploreIcon.classList.remove("home__explore-icon--show");
  homeTitle.classList.add("home__title--show");
  layoutModal.classList.remove("layout__modal--show");

  setTimeout(() => {
    layoutNav.style.transitionDuration = "300ms";
  }, 5000);
});

layoutNav.style.transitionDuration = "300ms";
