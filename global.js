const html = document.querySelector("html");
let theme = localStorage.getItem("theme") ?? "standart";

function changeTheme(currentTheme) {
  html.setAttribute("theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
}
changeTheme(theme);
