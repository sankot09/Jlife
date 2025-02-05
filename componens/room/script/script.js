// points
const intervalHunger = setInterval(hungerPointsHandle, 5000);
const hungerPoints = document.querySelector("#hunger-points");
// Button
let windowActionsButton = document.getElementById("actions-button");
let windowLocationButton = document.getElementById("location-button");
let roomLocationButton = document.getElementById("location-room-button");
let marketLocationButton = document.getElementById("location-market-button");
// actions button
let menuButtonActions = document.getElementById("menu-button-actions");
// windows
const actionsWindow = document.getElementById("actions-window");
const locationWindow = document.getElementById("location-window");
// elements
let backgroundImage = document.getElementById('bg')

// Стартовые значения
let hunger = localStorage.getItem("hunger") ?? "100";
let windowActions = "close";
let windowLocation = "close";

// Старт сцены
function startScene() {
  // Загрузка голода
  hungerPoints.style.width = `${hunger}%`;
  actionsWindow.style.display = "none";
  locationWindow.style.display = "none";
}
// Уменьшение голода
function hungerPointsHandle() {
  --hunger;
  hungerPoints.style.width = `${hunger}%`;
  localStorage.setItem("hunger", hunger);
  if (hunger <= 0) {
    hunger = "100";
  }
}
// Location Buttons
marketLocationButton.onclick = () => {
  document.getElementById('location-button').textContent = 'Магазин Ева';
  backgroundImage.id = "bg-eva-market";

}
roomLocationButton.onclick = () => {
  document.getElementById('location-button').textContent = 'Ваша комната';
  backgroundImage.id = "bg";
}
// actions button
menuButtonActions.onclick = () => {
  window.location = "../../index.html";
}
// Window Button
windowActionsButton.onclick = () => {
  console.log(windowActions);
  if (windowActions === "close") {
    windowActions = "open";
    actionsWindow.style.display = "grid";
    locationWindow.style.display = "none";
  } else {
    windowActions = "close";
    actionsWindow.style.display = "none";
  }
};
windowLocationButton.onclick = () => {
  console.log(windowLocation);
  if (windowLocation === "close") {
    windowLocation = "open";
    locationWindow.style.display = "grid";
    actionsWindow.style.display = "none";
  } else {
    windowLocation = "close";
    locationWindow.style.display = "none";
  }
};
startScene();
