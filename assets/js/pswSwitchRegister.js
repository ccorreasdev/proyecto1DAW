const psw1Off = document.querySelector("#psw1-off");
const psw1On = document.querySelector("#psw1-on");
const psw2Off = document.querySelector("#psw2-off");
const psw2On = document.querySelector("#psw2-on");
const pswInput = document.querySelector(".psw__input");
const pswInput2 = document.querySelector(".psw__input-2");

psw1Off.addEventListener("click", (e)=>{
    pswInput.type = "text";
    pswInput2.type = "text";
    psw1Off.classList.remove("login__icon--active")
    psw1On.classList.add("login__icon--active")
    psw2Off.classList.remove("login__icon--active")
    psw2On.classList.add("login__icon--active")
})


psw1On.addEventListener("click", (e)=>{
    pswInput.type = "password";
    pswInput2.type = "password";
    psw1On.classList.remove("login__icon--active")
    psw1Off.classList.add("login__icon--active")
    psw2On.classList.remove("login__icon--active")
    psw2Off.classList.add("login__icon--active")
})

psw2Off.addEventListener("click", (e)=>{
    pswInput.type = "text";
    pswInput2.type = "text";
    psw1Off.classList.remove("login__icon--active")
    psw1On.classList.add("login__icon--active")
    psw2Off.classList.remove("login__icon--active")
    psw2On.classList.add("login__icon--active")
})


psw2On.addEventListener("click", (e)=>{
    pswInput.type = "password";
    pswInput2.type = "password";
    psw1On.classList.remove("login__icon--active")
    psw1Off.classList.add("login__icon--active")
    psw2On.classList.remove("login__icon--active")
    psw2Off.classList.add("login__icon--active")
})