"use strict";
// Вибір кількості ієрогліфів
let length = Number(prompt(`Напишіть довжину слова`, 4));
if (typeof length !== "number" || isNaN(length)) {
  alert("Ви написали не число");
} else if (length < 0) length = 4;

// Створення контейнера та вкладання в нього ієрогліфів
const container = document.querySelector(`.container`);
let result = getRandomChinese(length); // Отримання промісу з кількістю ієрогліфів
result.then((resoleve) => {
  container.insertAdjacentElement(`afterbegin`, addHieroglyph(resoleve));
}); // виведення промісу

// Функція відбір останніх 5 цифр з числа Date
function getLastNumber() {
  let arr = Date.now().toString().split("");
  const lastNumbers = arr
    .filter((item, index) => index > arr.length - 6)
    .join("");
  return lastNumbers;
}
// Функція створення затримки
function delay(ms) {
  return new Promise((resoleve) => setTimeout(() => resoleve(), ms));
}
// Функція створення ієрогліфа
function createHieroglyph() {
  return String.fromCharCode(getLastNumber());
}
// Функція заповрення контейнера ієрогліфами кожні 50мс
async function getRandomChinese(length) {
  let container = [];
  while (length--) {
    container.push(createHieroglyph());
    await delay(50);
  }
  return container.join();
}

// // Фунція виведення ієрогліфів
function addHieroglyph(data) {
  const span = document.createElement(`span`);
  span.innerHTML = data;
  return span;
}
