const hungerPoints = document.querySelector("#hunger-points");
const intervalHunger = setInterval(hungerPointsHandle, 1000);
let hunger = 100;
console.log(hunger);
function hungerPointsHandle() {
  --hunger;
  hungerPoints.style.width = `${hunger}%`;
  if (hunger === 0) {
    clearInterval(intervalHunger);
  }
}
