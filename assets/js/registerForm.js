//Navegación
const registerPersonal = document.querySelector("#register-personal");
const registerContact = document.querySelector("#register-contact");
const registerDirection = document.querySelector("#register-direction");
const registerForm = document.querySelector("#register-form");
const personalNext = document.querySelector("#personal-next");
const contactNext = document.querySelector("#contact-next");
const contactPrevious = document.querySelector("#contact-previous");
const directionPrevious = document.querySelector("#direction-previous");
const registerFormSubmit = document.querySelector("#register-form-submit");
//RegEx
const regexNombre = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]{2,30}$/;
const regexDNI = /^\d{8}[A-HJ-NP-TV-Z]$/;
const regexEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
const regexPhone = /^(6|7|8|9)\d{8}$/;
const regexPostal = /^\d{5}$/;
const regexDir = /^[a-zA-Z0-9\s]+ [a-zA-Z0-9\s]*\d+[a-zA-Z0-9\s]*$/;
//Register Fields
const registerName = document.querySelector("#register-name");
const registerSurname = document.querySelector("#register-surname");
const registerBirthday = document.querySelector("#register-birthday");
const registerDNI = document.querySelector("#register-dni");
const registerEmail = document.querySelector("#register-email");
const registerPhone = document.querySelector("#register-phone");
const registerVia = document.querySelector("#register-via");
const registerDir = document.querySelector("#register-dir");
const registerCity = document.querySelector("#register-city");
const registerProvince = document.querySelector("#register-province");
const registerPostal = document.querySelector("#register-postal");

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
const checkRegisterFieldsPersonal = () => {
  registerName.classList.remove("account__input--error");
  registerSurname.classList.remove("account__input--error");
  registerDNI.classList.remove("account__input--error");
  registerBirthday.classList.remove("account__input--error");
  let errorRegisterFieldsPersonal = false;

  if (!regexNombre.test(registerName.value)) {
    registerName.classList.add("account__input--error");
    errorRegisterFieldsPersonal = true;
  }
  if (!regexNombre.test(registerSurname.value)) {
    registerSurname.classList.add("account__input--error");
    errorRegisterFieldsPersonal = true;
  }
  if (!regexDNI.test(registerDNI.value)) {
    registerDNI.classList.add("account__input--error");
    errorRegisterFieldsPersonal = true;
  }
  if (!registerBirthday.value) {
    registerBirthday.classList.add("account__input--error");
    errorRegisterFieldsPersonal = true;
  }

  if (errorRegisterFieldsPersonal) {
    return false;
  } else {
    return true;
  }
};

const setContentContact = () => {
  unselectRegisterPath();
  registerPersonal.classList.add("path__option--active");
  registerContact.classList.add("path__option--active");
  registerDirection.classList.remove("path__option--active");
  const scrollLeftOffset =
    document.querySelector("#register-form-2").offsetLeft;

  registerForm.scroll({
    left: scrollLeftOffset - 50,
    behavior: "smooth",
  });
};
registerContact.addEventListener("mousedown", (e) => {
  e.preventDefault();
  setContentContact();
});
personalNext.addEventListener("mousedown", (e) => {
  e.preventDefault();
  if (checkRegisterFieldsPersonal()) {
    setContentContact();
  }
});
directionPrevious.addEventListener("mousedown", (e) => {
  e.preventDefault();
  setContentContact();
});

//DIRECTION
const checkRegisterFieldsContact = () => {
  registerEmail.classList.remove("account__input--error");
  registerPhone.classList.remove("account__input--error");
  let errorRegisterFieldsContact = false;

  if (!regexEmail.test(registerEmail.value)) {
    registerEmail.classList.add("account__input--error");
    errorRegisterFieldsContact = true;
  }
  if (!regexPhone.test(registerPhone.value)) {
    registerPhone.classList.add("account__input--error");
    errorRegisterFieldsContact = true;
  }

  if (errorRegisterFieldsContact) {
    return false;
  } else {
    return true;
  }
};

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
  if (checkRegisterFieldsContact()) {
    setContentDirection();
  }
});

const checkRegisterFieldsDirection = () => {
  registerVia.classList.remove("account__input--error");
  registerDir.classList.remove("account__input--error");
  registerCity.classList.remove("account__input--error");
  registerProvince.classList.remove("account__input--error");
  registerPostal.classList.remove("account__input--error");
  let errorRegisterFieldsDirection = false;

  if (!regexNombre.test(registerVia.value)) {
    registerVia.classList.add("account__input--error");
    errorRegisterFieldsDirection = true;
  }
  if (!regexDir.test(registerDir.value)) {
    registerDir.classList.add("account__input--error");
    errorRegisterFieldsDirection = true;
  }
  if (!regexNombre.test(registerCity.value)) {
    registerCity.classList.add("account__input--error");
    errorRegisterFieldsDirection = true;
  }
  if (!regexNombre.test(registerProvince.value)) {
    registerProvince.classList.add("account__input--error");
    errorRegisterFieldsDirection = true;
  }
  if (!regexPostal.test(registerPostal.value)) {
    registerPostal.classList.add("account__input--error");
    errorRegisterFieldsDirection = true;
  }

  if (errorRegisterFieldsDirection) {
    return false;
  } else {
    return true;
  }
};

registerFormSubmit.addEventListener("mousedown", (e) => {
  e.preventDefault();
  checkRegisterFieldsDirection();
});
