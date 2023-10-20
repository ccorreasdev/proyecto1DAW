let colorModeStored = localStorage.getItem("colorMode");
const btnColorModeChange = document.querySelector("#btn-color-mode-change");

if(!colorModeStored){
  localStorage.setItem("colorMode", "light");
  colorModeStored = "light";
}


const colorModeLight = ()=>{
  document.documentElement.style.setProperty("--color-principal", "#b97b60");
  document.documentElement.style.setProperty("--color-primary", "#1d1d1c");
  document.documentElement.style.setProperty(
    "--color-primary-a",
    "#1d1d1cd5"
  );
  document.documentElement.style.setProperty("--color-secondary", "#1c68d5");
  document.documentElement.style.setProperty(
    "--color-secondary-2",
    "#4b90ff"
  );
  document.documentElement.style.setProperty("--color-tertiary", "#2a2a2a");
  document.documentElement.style.setProperty("--color-quaternary", "#ececee");
  document.documentElement.style.setProperty("--color-quintuary", "#8e8e8e");
  document.documentElement.style.setProperty("--color-text", "#ffffff");
  document.documentElement.style.setProperty("--color-subtitle", "#91b0e6");
  document.documentElement.style.setProperty("--color-text-2", "#464646");
  document.documentElement.style.setProperty("--card-bg", "#e6e7e7e0");
  document.documentElement.style.setProperty("--color-card-title", "#010101");
  document.documentElement.style.setProperty(
    "--color-card-description",
    "#010101"
  );
  document.documentElement.style.setProperty("--color-card-price", "#010101");
}

const colorModeDark = () =>{
  document.documentElement.style.setProperty("--color-principal", "#b97b60");
  document.documentElement.style.setProperty("--color-primary", "#ececee");
  document.documentElement.style.setProperty(
    "--color-primary-a",
    "#ececeed5"
  );
  document.documentElement.style.setProperty("--color-secondary", "#1c68d5");
  document.documentElement.style.setProperty(
    "--color-secondary-2",
    "#4b90ff"
  );
  document.documentElement.style.setProperty("--color-tertiary", "#ececee");
  document.documentElement.style.setProperty("--color-quaternary", "#2a2a2a");
  document.documentElement.style.setProperty("--color-quintuary", "#8e8e8e");
  document.documentElement.style.setProperty("--color-text", "#010101");
  document.documentElement.style.setProperty("--color-subtitle", "#91b0e6");
  document.documentElement.style.setProperty("--color-text-2", "#ececee");
  document.documentElement.style.setProperty("--card-bg", "#1d1d1ce0");
  document.documentElement.style.setProperty("--color-card-title", "#ececee");
  document.documentElement.style.setProperty(
    "--color-card-description",
    "#ececee"
  );
  document.documentElement.style.setProperty("--color-card-price", "#ececee");
}


if(colorModeStored === "light"){
  colorModeLight();
}

if(colorModeStored === "dark"){
  colorModeDark();
}


btnColorModeChange.addEventListener("click", (e) => {
 
  if (colorModeStored == "dark") {
    localStorage.setItem("colorMode", "light");
    colorModeStored = "light";
    colorModeLight();
  } 

  else if (colorModeStored === "light") { 
    localStorage.setItem("colorMode", "dark");
    colorModeStored = "dark";
    colorModeDark();
  }
});
