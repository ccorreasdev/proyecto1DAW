const accountContent = document.querySelector(".account__content");
const btnRegisterScroll = document.querySelector("#btnRegisterScroll");
const btnLoginScroll = document.querySelector("#btnLoginScroll");
let audioChangeRegisterLogin = new Audio("assets/audio/wind.mp3");

btnRegisterScroll.addEventListener("click", (e) => {
  e.preventDefault();
  audioChangeRegisterLogin.play();
  accountContent.scroll({
    top: accountContent.scrollHeight,
    behavior: "smooth",
  });
});

btnLoginScroll.addEventListener("click", (e) => {
  e.preventDefault();
  audioChangeRegisterLogin.play();
  accountContent.scroll({
    top: 0,
    behavior: "smooth",
  });
});
