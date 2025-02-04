const hungerPoints = document.querySelector("#hunger-points");
const intervalHunger = setInterval(hungerPointsHandle, 5000);
let hunger = localStorage.getItem("hunger") ?? "100";
// Старт сцены
function startScene() {
  // Загрузка голода
  hungerPoints.style.width = `${hunger}%`;
}
// Уменьшение голода
function hungerPointsHandle() {
  --hunger;
  hungerPoints.style.width = `${hunger}%`;
  localStorage.setItem('hunger', hunger)
  if (hunger <= 0) {
    hunger = "100";
  }
  console.log(hunger);
}

startScene();