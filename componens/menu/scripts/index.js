// Получаем элементы
const closeGameButton = document.querySelector("#close-game-btn");
const changesButton = document.querySelector("#changes");
const startButton = document.querySelector("#start");
const settingsButton = document.querySelector("#settings");
const tipsTextMenu = document.getElementById("tips");

const messages = [
  "Добро пожаловать!",
  "Жаба скрипт",
  "Игра на стадии разработки!",
  "Ня:3",
  "Hello Life Sim!",
  "Hello Git!",
  "vi.exe",
  "LOL",
  "-_-",
  "qwerty",
  "Ты не один!",
  "Sankot Kotov",
  "####",
  "****",
  "Аниме топ!",
  "Жми играть!",
  "o^o",
  "Дед внутри",
  "HELP",
  "ERROR404",
  "Installing Miner.bat",
  "KABUUUUM!",
  "Love is",
  ""
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function randomTips() {
  const index = getRandomInt(0, messages.length - 1);
  let tips = messages[index];
  tipsTextMenu.innerHTML = tips;
}
setInterval(randomTips, 9000);

// Кнопка выхода
closeGameButton.onclick = () => {
  window.close();
};
changesButton.onclick = () => {
  window.location = "./componens/changes/changes.html";
};
startButton.onclick = () => {
  window.location = "./componens/room/room.html";
};
settingsButton.onclick = () => {
  window.location = "./componens/settings/settings.html";
};

randomTips();
