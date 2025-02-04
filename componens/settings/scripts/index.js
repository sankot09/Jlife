const themeSelect = document.querySelector("#theme-select");
const fontsSelect = document.querySelector("#fonts-select")
const buttonBack = document.querySelector("#setting-button-back")
// Текст в кнопке при старте
function textThemeButton() {
  if (theme === 'standart') {
    document.getElementById('theme-select').textContent = 'Розовый';
  } else {
    document.getElementById('theme-select').textContent = 'Оранжевый';
  }
}
// Переключение темы
function themeSelectButton() {
  if (theme === "standart") {
    theme = "orange";
    document.getElementById('theme-select').textContent = 'Оранжевый';
  } else {
    theme = "standart";
    document.getElementById('theme-select').textContent = 'Розовый';
  }
  changeTheme(theme);
}

// Переключение шрифтов
function changeFontsSizeBtn () {
  if (fontsSize === '10px'){
    fontsSize = '20px'
  } else {
    fontsSize = '10px'
  }
  changeFontsSize(fontsSize);
}

buttonBack.onclick = () => {
  window.location = "../../index.html";
};

textThemeButton ();
themeSelect.onclick = themeSelectButton;
fontsSelect.onclick = changeFontsSizeBtn;
