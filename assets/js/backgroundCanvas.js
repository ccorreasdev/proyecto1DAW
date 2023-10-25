//Variables y constantes
const backgroundCanvas = document.querySelector("#background-canvas");
const linesCanvas = document.querySelector("#lines-canvas");
const pointsQuantity = backgroundCanvas.dataset["points"];
let documentHeight = Math.max(
  document.body.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.clientHeight,
  document.documentElement.scrollHeight,
  document.documentElement.offsetHeight
);

//Asignacion de contextos y canvas
let context = backgroundCanvas.getContext("2d");
let linesContext = linesCanvas.getContext("2d");
let mouseX = 0;
let mouseY = 0;
let pointsNumber = pointsQuantity;
let points = [];
let pointsOpacityDirection = [];
let pointsGenerated = [];
backgroundCanvas.style.filter = "blur(5px)";

//Tamaños del canvas y contextos
backgroundCanvas.width = window.innerWidth;
backgroundCanvas.height = documentHeight;
linesCanvas.width = window.innerWidth;
linesCanvas.height = documentHeight;
context.width = window.innerWidth;
context.height = backgroundCanvas.height;
linesContext.width = window.innerWidth;
linesContext.height = backgroundCanvas.height;

//Tamaños del canvas y contextos al redimensionar ventana
window.addEventListener("resize", (e) => {
  documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  backgroundCanvas.width = window.innerWidth;
  backgroundCanvas.height = documentHeight;
  linesCanvas.width = window.innerWidth;
  linesCanvas.height = documentHeight;
  context.width = window.innerWidth;
  context.height = backgroundCanvas.height;
  linesContext.width = window.innerWidth;
  linesContext.height = backgroundCanvas.height;
});

//Inicialización de los puntos
const initializePoints = (velX = 1, velY = 1) => {
  points = [];
  for (let i = 0; i < pointsNumber; i++) {
    pointsOpacityDirection.push(false);
    let pointX = Math.random() * backgroundCanvas.width;
    let pointY = Math.random() * backgroundCanvas.height;
    let pointColor;
    const colorRandomSelector = Math.random() * 3;

    if (colorRandomSelector >= 2) {
      //Azul
      pointColor = "16,106,210";
    } else if (colorRandomSelector >= 1) {
      //Morado
      pointColor = "163,44,223";
    } else if (colorRandomSelector >= 0) {
      //Blanco
      pointColor = "234,234,246";
    }

    let colorOpacity = Math.random();
    let pointXVel = (Math.random() - 0.5) * 0.5 * velX;
    let pointYVel = (Math.random() - 0.5) * 0.5 * velY;
    let pointSize = Math.random() * 20;
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

//Añadir nuevos puntos
const addPoints = (posX, posY) => {
  pointsOpacityDirection.push(false);
  let pointX = posX;
  let pointY = posY;
  let pointColor;
  const colorRandomSelector = Math.random() * 3;

  if (colorRandomSelector >= 2) {
    pointColor = "16,106,210";
  } else if (colorRandomSelector >= 1) {
    pointColor = "163,44,223";
  } else if (colorRandomSelector >= 0) {
    pointColor = "234,234,246";
  }

  let colorOpacity = Math.random();
  let pointXVel = (Math.random() - 0.5) * 0.5;
  let pointYVel = (Math.random() - 0.5) * 0.5;
  let pointSize = Math.random() * 20;
  points.push({
    pointX,
    pointY,
    pointXVel,
    pointYVel,
    pointSize,
    pointColor,
    colorOpacity,
  });
};

//Dibujar los puntos y líneas
const drawPoints = () => {
  context.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
  linesContext.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
  for (let i = 0; i < points.length; i++) {
    context.beginPath();
    let point = points[i];

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

    context.filter = "blur(5px)";
    context.fill();
    context.closePath();

    //Dibujamos las líneas de los nodos
    linesContext.beginPath();
    linesContext.lineWidth = 0.8;
    linesContext.strokeStyle = "#ffffff10";
    linesContext.moveTo(point.pointX, point.pointY);
    if (i + 1 >= points.length) {
      linesContext.lineTo(points[0].pointX, points[0].pointY);
      linesContext.stroke();
    } else {
      linesContext.lineTo(points[i + 1].pointX, points[i + 1].pointY);
      linesContext.stroke();
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

//Listener del ratón
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

//Generar puntos con click de raton
document.addEventListener("click", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY + window.scrollY - 90;
  addPoints(mouseX, mouseY);
});

//Función de llamada a la animación
const canvasAnimation = () => {
  drawPoints();
};

//Llamada a funciones iniciales
initializePoints();
canvasAnimation();

//Menu configuracion
const canvasMenuBtn = document.querySelector("#canvas__configuration");
const canvasMenu = document.querySelector(".canvas__menu");
const sliderPoints = document.querySelector("#slider-points");
const sliderVelocity = document.querySelector("#slider-velocity");

//Menu canvas
canvasMenuBtn.addEventListener("click", (e) => {
  canvasMenu.classList.toggle("canvas__menu--active");
});

sliderPoints.addEventListener("input", (e) => {
  console.log(e.target.value);
  pointsNumber = e.target.value;
  sliderVelocity.value = 5;
  initializePoints();
});

sliderVelocity.addEventListener("input", (e) => {
  initializePoints(e.target.value, e.target.value);
});
