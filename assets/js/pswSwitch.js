const pswOff = document.querySelector("#psw-off");
const pswOn = document.querySelector("#psw-on");
const pswInput = document.querySelector("#account-login-psw");

pswOff.addEventListener("click", (e) => {
  pswInput.type = "text";
  pswOff.classList.remove("account__icon--active");
  pswOn.classList.add("account__icon--active");
});

pswOn.addEventListener("click", (e) => {
  pswInput.type = "password";
  pswOn.classList.remove("account__icon--active");
  pswOff.classList.add("account__icon--active");
});
