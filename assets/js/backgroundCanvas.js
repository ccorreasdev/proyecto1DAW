const backgroundCanvas = document.querySelector("#background-canvas");
const pointsQuantity = backgroundCanvas.dataset["points"];
const documentHeight = Math.max(
  document.body.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.clientHeight,
  document.documentElement.scrollHeight,
  document.documentElement.offsetHeight
);
let context = backgroundCanvas.getContext("2d");
let mouseX = 0;
let mouseY = 0;
const pointsNumber = pointsQuantity;
let points = [];
let pointsOpacityDirection = [];
let pointsGenerated = [];

backgroundCanvas.width = window.innerWidth;
backgroundCanvas.height = documentHeight;
context.width = window.innerWidth;
context.height = backgroundCanvas.height;
backgroundCanvas.style.filter = "blur(5px)";

const initializePoints = () => {
  for (let i = 0; i < pointsNumber; i++) {
    pointsOpacityDirection.push(false);
    let pointX = Math.random() * backgroundCanvas.width;
    let pointY = Math.random() * backgroundCanvas.height;
    let colorR = parseInt(Math.random() * 256);
    let colorG = parseInt(Math.random() * 256);
    let colorB = parseInt(Math.random() * 256);
    let colorOpacity = Math.random();
    let pointXVel = (Math.random() - 0.5) * 0.5;
    let pointYVel = (Math.random() - 0.5) * 0.5;
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

    if (point.pointX < 0 || point.pointX > backgroundCanvas.width) {
      point.pointXVel = -point.pointXVel;
    }

    if (point.pointY < 0 || point.pointY > backgroundCanvas.height) {
      point.pointYVel = -point.pointYVel;
    }

    if (pointsOpacityDirection[i] === true) {
      point.colorOpacity -= 0.001;
    } else {
      point.colorOpacity += 0.001;
    }

    if (point.colorOpacity > 1.0) {
      pointsOpacityDirection[i] = true;
    }
    if (point.colorOpacity <= 0.0) {
      pointsOpacityDirection[i] = false;
    }

    // context.fillStyle = `rgba(${point.colorR},${point.colorG},${point.colorB},${point.colorOpacity})`;

    context.fillStyle = `rgba(255,255,255, ${point.colorOpacity})`;
    context.fill();
  }

  for (let i = 0; i < pointsGenerated.length; i++) {
    context.beginPath();
    context.arc(
      pointsGenerated[i].mouseX,
      pointsGenerated[i].mouseY,
      20,
      0,
      2 * Math.PI
    );
    context.fillStyle = "#ffffff2a";
    context.fill();
  }

  requestAnimationFrame(drawPoints);
};

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  pointsGenerated.push({ mouseX, mouseY });

  setTimeout(() => {
    console.log(pointsGenerated.length);

    if (pointsGenerated.length > 1) {
      pointsGenerated.shift();
    }
  }, 100);
});

const canvasAnimation = () => {
  drawPoints();
};

initializePoints();
canvasAnimation();
