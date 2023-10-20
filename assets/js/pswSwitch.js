const pswOff = document.querySelector("#psw-off");
const pswOn = document.querySelector("#psw-on");
const pswInput = document.querySelector(".psw__input");

pswOff.addEventListener("click", (e)=>{
    pswInput.type = "text";
    pswOff.classList.remove("login__icon--active")
    pswOn.classList.add("login__icon--active")
})


pswOn.addEventListener("click", (e)=>{
    pswInput.type = "password";
    pswOn.classList.remove("login__icon--active")
    pswOff.classList.add("login__icon--active")
})