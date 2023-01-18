// Прослуховування при нажатті клавіш
document.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    changeStyle(key);
  }
});
// Прослуховування при відтисканні клавіш
document.addEventListener(`keyup`, function (e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  backStyle(key);
});
// Функція зміни стилю при нажатті на кнопку
function changeStyle(key) {
  if (!key.classList.contains("playing")) {
    key.classList.add(`playing`);
    key.style.backgroundColor = createRandomColor();
  }
}
// Функцыя повернення стилю
function backStyle(key) {
  if (key.classList.contains("playing")) {
    key.classList.remove(`playing`);
    key.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;
  } else return;
}
//  Функція створення випадкового кольору
function createRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const result = `#` + randomColor;
  return result;
}
