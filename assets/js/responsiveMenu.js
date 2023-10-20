const responsiveMenuButton = document.querySelector(".nav__responsive");
const layoutNav = document.querySelector(".layout__nav");

responsiveMenuButton.addEventListener("click", (e) => {
  layoutNav.classList.toggle("layout__nav--active");
  responsiveMenuButton.classList.toggle("nav__responsive--active");
});
