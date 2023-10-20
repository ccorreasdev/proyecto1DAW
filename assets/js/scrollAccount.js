const accountContent = document.querySelector(".account__content");
const btnRegisterScroll = document.querySelector("#btnRegisterScroll");
const btnLoginScroll = document.querySelector("#btnLoginScroll");

btnRegisterScroll.addEventListener("click", (e) => {
  e.preventDefault();
  accountContent.scroll({
    top: accountContent.scrollHeight,
    behavior: "smooth",
  });
});

btnLoginScroll.addEventListener("click", (e) => {
  e.preventDefault();
  accountContent.scroll({
    top: 0,
    behavior: "smooth",
  });
});
