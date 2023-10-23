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
    let pointColor;
    const colorRandomSelector = Math.random() * 3;

    if (colorRandomSelector >= 2) {
      pointColor = "19,118,129";
    } else if (colorRandomSelector >= 1) {
      pointColor = "105,100,211";
    } else if (colorRandomSelector >= 0) {
      pointColor = "234,234,246";
    }

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
      pointColor,
      colorOpacity,
    });
  }
};

const drawPoints = () => {
  context.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);

  for (let i = 0; i < pointsNumber; i++) {
    context.beginPath();
    let point = points[i];

    context.filter = "blur(5px)";

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

    context.fillStyle = `rgba(${point.pointColor}, ${point.colorOpacity})`;

    context.fill();

    context.closePath();

    //Dibujamos las líneas de los nodos

    context.lineWidth = 0.5;
    context.strokeStyle = "#000000ec";
    context.moveTo(point.pointX, point.pointY);
    if (i + 1 >= pointsNumber) {
      context.lineTo(points[0].pointX, points[0].pointY);
      context.stroke();
    } else {
      context.lineTo(points[i + 1].pointX, points[i + 1].pointY);
      context.stroke();
    }
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
    context.fillStyle = "#ffffff3a";
    context.fill();
  }

  requestAnimationFrame(drawPoints);
};

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY + window.scrollY - 90;

  pointsGenerated.push({ mouseX, mouseY });

  setTimeout(() => {
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
