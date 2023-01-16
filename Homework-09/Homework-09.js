"use strict"; // Створення змінних з HTML
const button = document.querySelector(".btn");
const mainContainer = document.querySelector(".main-container");
const container = document.createElement(`div`);
let interval;

// Створення квадрату за кліком
button.onclick = () => {
  generateBlocks();
};

// Створення контейнера
function addContainer() {
  container.classList.add(`container`);
  mainContainer.insertAdjacentElement("afterbegin", container);
}

// Створення кольорових квадратів
function addBox() {
  const box = document.createElement(`div`);
  box.classList.add(`box`);
  container.insertAdjacentElement("afterbegin", box);
  box.style.backgroundColor = createRandomColor();
}

// Створення рандомного кольору
function createRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const result = `#` + randomColor;
  return result;
}

// Заповнення контейнена квадратами
function fillingBlocks() {
  let i = 0;
  while (i < 25) {
    addBox();
    i++;
  }
}

// Функція зміни кольорів
function changeRandomColor() {
  let arr = Array.from(document.querySelectorAll(`.box`));
  arr.forEach((item) => (item.style.backgroundColor = createRandomColor()));
}

//Функція виделення блоків
function removeBlocks() {
  while (document.querySelector(`.box`)) {
    document.querySelector(`.box`).remove();
  }
}
// Функція створення
function generateBlocks() {
  if (document.querySelector(`.container`)) {
    clearInterval(interval);
    removeBlocks();
    container.remove();
    button.innerHTML = "Click to start";
  } else {
    interval = setInterval(() => {
      changeRandomColor();
    }, 1000);
    addContainer();
    fillingBlocks();
    button.innerHTML = "Click to end";
  }
}
