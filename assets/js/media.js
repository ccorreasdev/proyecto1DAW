const explore = document.querySelector("#explore");
const audio = document.querySelector("#audio");
const video = document.querySelector("#video");
const layoutNav = document.querySelector(".layout__nav");
const videoContainer = document.querySelector(".home__video-container");
const bgCanvas = document.querySelector(".canvas__background");
const lnCanvas = document.querySelector(".canvas__lines");
const exploreIcon = document.querySelector(".home__explore-icon");
const homeTitle = document.querySelector(".home__title");

explore.addEventListener("click", (e) => {
  audio.play();
  video.play();
  layoutNav.classList.remove("layout__nav--hidden");
  videoContainer.classList.remove("home__video-container--hidden");
  bgCanvas.classList.remove("canvas__background--hidden");
  lnCanvas.classList.remove("canvas__lines--hidden");
  exploreIcon.classList.remove("home__explore-icon--show");
  homeTitle.classList.add("home__title--show");
});
