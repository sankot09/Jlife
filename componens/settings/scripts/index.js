const themeSelect = document.querySelector("#theme-select");

function themeSelectButton() {
  if (theme === "standart") {
    theme = "green";
  } else {
    theme = "standart";
  }
  changeTheme(theme);
}
themeSelect.onclick = themeSelectButton;
