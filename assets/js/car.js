const carButton = document.querySelector(".car__button");
const carVelocimeter = document.querySelector(".velocimeter1__vel");
const gearNumber = document.querySelector(".gear__number");
const velocimeterPointer = document.querySelector(".velocimeter1__pointer");
const velocimeterPointer2 = document.querySelector(".velocimeter2__pointer");
const delay = 25;

carButton.addEventListener("click", (e) => {
  for (let i = 0; i < 121; i++) {
    let revolutions = 0;
    setTimeout(() => {
      velocimeterPointer.style.transform = `rotate(${i}deg)`;

      revolutions++;
      if (i == 20) {
        revolutions = 0;
      }
      if (i == 40) {
        revolutions = 0;
      }

      if (i == 60) {
        revolutions = 0;
      }
      if (i == 80) {
        revolutions = 0;
      }

      if (i == 100) {
        revolutions = 0;
      }

      velocimeterPointer2.style.transform = `rotate(${revolutions * 20}deg)`;

      if (i >= 120) {
        gearNumber.innerText = 7;
      } else if (i > 100) {
        gearNumber.innerText = 6;
      } else if (i > 80) {
        gearNumber.innerText = 5;
      } else if (i > 60) {
        gearNumber.innerText = 4;
      } else if (i > 40) {
        gearNumber.innerText = 3;
      } else if (i > 20) {
        gearNumber.innerText = 2;
      } else if (i > 0) {
        gearNumber.innerText = 1;
      }

      carVelocimeter.innerText = `${i} km/h`;
    }, i * delay);
  }

  carVelocimeter.innerText = "0 km/h";
});
