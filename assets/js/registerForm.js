const registerPersonal = document.querySelector("#register-personal");
const registerContact = document.querySelector("#register-contact");
const registerDirection = document.querySelector("#register-direction");
const registerForm = document.querySelector("#register-form");
const personalNext = document.querySelector("#personal-next");
const contactNext = document.querySelector("#contact-next");
const contactPrevious = document.querySelector("#contact-previous");
const directionPrevious = document.querySelector("#direction-previous");

const unselectRegisterPath = () => {
  registerPersonal.classList.remove("path__option--active");
  registerContact.classList.remove("path__option--active");
  registerDirection.classList.remove("path__option--active");
};

//PERSONAL
const setContentPersonal = () => {
  unselectRegisterPath();
  registerPersonal.classList.add("path__option--active");
  registerContact.classList.remove("path__option--active");
  registerDirection.classList.remove("path__option--active");

  registerForm.scroll({
    left: 0,
    behavior: "smooth",
  });
};
registerPersonal.addEventListener("mousedown", (e) => {
  e.preventDefault();
  setContentPersonal();
});
contactPrevious.addEventListener("mousedown", (e) => {
  e.preventDefault();
  setContentPersonal();
});

// CONTACT
const setContentContact = () => {
  unselectRegisterPath();
  registerPersonal.classList.add("path__option--active");
  registerContact.classList.add("path__option--active");
  registerDirection.classList.remove("path__option--active");

  registerForm.scroll({
    left: registerForm.scrollWidth / 2,
    behavior: "smooth",
  });
};
registerContact.addEventListener("mousedown", (e) => {
  e.preventDefault();
  setContentContact();
});
personalNext.addEventListener("mousedown", (e) => {
  e.preventDefault();
  setContentContact();
});
directionPrevious.addEventListener("mousedown", (e) => {
  e.preventDefault();
  setContentContact();
});

//DIRECTION
const setContentDirection = () => {
  unselectRegisterPath();
  registerPersonal.classList.add("path__option--active");
  registerContact.classList.add("path__option--active");
  registerDirection.classList.add("path__option--active");

  registerForm.scroll({
    left: registerForm.scrollWidth,
    behavior: "smooth",
  });
};
registerDirection.addEventListener("mousedown", (e) => {
  e.preventDefault();
  setContentDirection();
});
contactNext.addEventListener("mousedown", (e) => {
  e.preventDefault();
  setContentDirection();
});
