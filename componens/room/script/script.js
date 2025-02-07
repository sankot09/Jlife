// points
let intervalHunger = setInterval(updateScene, 100);
const hungerPoints = document.querySelector("#hunger-points");
const healthPoints = document.querySelector("#health-points");
const moneyPoints = document.getElementById("money");
const energyPoints = document.getElementById("energy-points");
// Button
const windowActionsButton = document.getElementById("actions-button");
const windowLocationButton = document.getElementById("location-button");
const roomLocationButton = document.getElementById("location-room-button");
const marketLocationButton = document.getElementById("location-market-button");
const restartGameButton = document.getElementById("restart-button");
// actions button
const menuButtonActions = document.getElementById("menu-button-actions");
const begButtonActions = document.getElementById("beg-button-actions");
const buyBreadButtonActions = document.getElementById(
  "buy-bread-button-actions"
);
const sleepButtonActions = document.getElementById("sleep-button-actions");
// windows
const actionsWindow = document.getElementById("actions-window");
const locationWindow = document.getElementById("location-window");
const restartWindow = document.getElementById("game-over");
// elements
const backgroundImage = document.getElementById("bg");

// Стартовые значения
let money = Number(localStorage.getItem("money") ?? "0");
moneyPoints.innerHTML = money + "$";
let hp = Number(localStorage.getItem("hp") ?? "100");
let hunger = Number(localStorage.getItem("hunger") ?? "100");
let energy = Number(localStorage.getItem("energy") ?? "100");
let windowActions = "close";
let windowLocation = "close";
// Проверка
gameOverActive();
function gameOverActive() {
  if (hp === 0) {
    gameOver();
  }
}

// Старт сцены
function startScene() {
  // Загрузка полоски
  hungerPoints.style.width = `${hunger}%`;
  healthPoints.style.width = `${hp}%`;
  energyPoints.style.width = `${energy}%`;
  actionsWindow.style.display = "none";
  locationWindow.style.display = "none";
}
// Уменьшение голода
function updateScene() {
  if (hunger > 0) {
    --hunger;
    hungerPoints.style.width = `${hunger}%`;
    update();
  }
  if (hunger === 0) {
    decreaseHp();
  }
}
// Уменьшение здоровье при низком показателе голода
function decreaseHp() {
  if (hp > 0) {
    --hp;
    healthPoints.style.width = `${hp}%`;
    localStorage.setItem("hp", hp);
  }
  if (hp === 0) {
    gameOver();
  }
}

function gameOver() {
  clearInterval(intervalHunger);
  actionsWindow.style.display = "none";
  locationWindow.style.display = "none";
  restartWindow.style.display = "flex";
}
// restart button
restartGameButton.onclick = () => {
  hp = 100;
  hunger = 100;
  money = money / 2;
  moneyPoints.innerHTML = money + "$";
  healthPoints.style.width = `${hp}%`;
  hungerPoints.style.width = `${hunger}%`;
  restartWindow.style.display = "none";
  intervalHunger = setInterval(updateScene, 100);
};
// Location Buttons
marketLocationButton.onclick = () => {
  document.getElementById("location-button").textContent = "Магазин Ева";
  backgroundImage.id = "bg-eva-market";
};
roomLocationButton.onclick = () => {
  document.getElementById("location-button").textContent = "Ваша комната";
  backgroundImage.id = "bg";
};
// actions button
menuButtonActions.onclick = () => {
  window.location = "../../index.html";
};
begButtonActions.onclick = () => {
  if (energy >= 15) {
    money = money + 3;
    energy = energy - 15;
    hunger = hunger - 3;
    update();
  }
};
buyBreadButtonActions.onclick = () => {
  if (money >= 2) {
    money = money - 2;
    hunger = hunger + 10;
    update();
  }
};

sleepButtonActions.onclick = () => {
  console.log(hunger);
  energyPointsHandle(50);
  hungerPointsHandle(-15);
  console.log(hunger);
  update();
};
// points
function energyPointsHandle(value) {
  energy += value;
  if (energy > 100) energy = 100;
  if (energy < 0) energy = 0;
}
function hungerPointsHandle(value) {
  hunger += value;
  if (hunger > 100) hunger = 100;
  if (hunger < 0) hunger = 0;
}
function healthPointsHandle(value) {
  hp += value;
  if (hp > 100) hp = 100;
  if (hp < 0) hp = 0;
}
// Window Button
windowActionsButton.onclick = () => {
  if (windowActions === "close" && hp > 0) {
    windowActions = "open";
    actionsWindow.style.display = "grid";
    locationWindow.style.display = "none";
  } else {
    windowActions = "close";
    actionsWindow.style.display = "none";
  }
};
windowLocationButton.onclick = () => {
  if (windowLocation === "close" && hp > 0) {
    windowLocation = "open";
    locationWindow.style.display = "grid";
    actionsWindow.style.display = "none";
  } else {
    windowLocation = "close";
    locationWindow.style.display = "none";
  }
};
function handleMoney() {
  money = Number(money.toFixed(2));
}
// Функция обновления счётчиков
function update() {
  handleMoney();
  localStorage.setItem("money", money);
  moneyPoints.innerHTML = money + "$";
  localStorage.setItem("hunger", hunger);
  localStorage.setItem("energy", energy);
  localStorage.setItem("hp", hp);
  hungerPoints.style.width = `${hunger}%`;
  healthPoints.style.width = `${hp}%`;
  energyPoints.style.width = `${energy}%`;
}
startScene();
