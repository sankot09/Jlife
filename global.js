const html = document.querySelector("html");
let theme = localStorage.getItem("theme") ?? "standart";
let fontsSize = localStorage.getItem("fontsSize") ?? "10px";

function changeTheme(currentTheme) {
  html.setAttribute("theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
}
function changeFontsSize(fontsSizeSelectes) {
  document.documentElement.style.setProperty("--fonts-size", fontsSizeSelectes);
  localStorage.setItem("fontsSize", fontsSize);
}
changeTheme(theme);
changeFontsSize(fontsSize);
