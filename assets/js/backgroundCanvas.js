const backgroundCanvas = document.querySelector("#background-canvas");
let context = backgroundCanvas.getContext("2d");
let mouseX = 0;
let mouseY = 0;
const pointsNumber = 100;
let points = [];
let pointsGenerated = [];

backgroundCanvas.width = window.innerWidth;
backgroundCanvas.height = window.innerHeight;
context.width = window.innerWidth;
context.height = backgroundCanvas.height;
backgroundCanvas.style.filter = "blur(5px)";

const initializePoints = () => {
  for (let i = 0; i < pointsNumber; i++) {
    let pointX = Math.random() * backgroundCanvas.width;
    let pointY = Math.random() * backgroundCanvas.height;
    let colorR = parseInt(Math.random() * 256);
    let colorG = parseInt(Math.random() * 256);
    let colorB = parseInt(Math.random() * 256);
    let colorOpacity = Math.random();
    console.log(colorR);
    console.log(colorG);
    console.log(colorB);
    let pointXVel = (Math.random() - 0.5) * 10;
    let pointYVel = (Math.random() - 0.5) * 10;
    let pointSize = Math.random() * 10;
    points.push({
      pointX,
      pointY,
      pointXVel,
      pointYVel,
      pointSize,
      colorR,
      colorG,
      colorB,
      colorOpacity,
    });
  }
};

const drawPoints = () => {
  context.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
  for (let i = 0; i < pointsNumber; i++) {
    let point = points[i];
    context.beginPath();
    context.arc(point.pointX, point.pointY, point.pointSize, 0, 2 * Math.PI);
    point.pointX += point.pointXVel;
    point.pointY += point.pointYVel;
    point.colorOpacity = 1;

    if (point.pointX < 0 || point.pointX > backgroundCanvas.width) {
      point.pointXVel = -point.pointXVel;
    }

    if (point.pointY < 0 || point.pointY > backgroundCanvas.height) {
      point.pointYVel = -point.pointYVel;
    }

    // context.fillStyle = `rgba(${point.colorR},${point.colorG},${point.colorB},${point.colorOpacity})`;
    console.log("OPACIDAD: " + point.colorOpacity);
    context.fillStyle = `rgba(255,255,255, ${point.colorOpacity})`;
    context.fill();
  }
  requestAnimationFrame(drawPoints);
};

// const createNewPoints = () => {};

// document.addEventListener("mousemove", (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
//   pointsGenerated.push(mouseX, mouseY);

//   setTimeout(() => {
//     pointsGenerated.shift();
//   }, 1000);

//   console.log(pointsGenerated);
//   context.beginPath();
//   context.arc(mouseX, mouseY, Math.random() * 20, 0, 2 * Math.PI);
//   context.fillStyle = "#ffffff5a";
//   context.fill();
//   context.closePath();
// });

const canvasAnimation = () => {
  drawPoints();
};

initializePoints();
canvasAnimation();
