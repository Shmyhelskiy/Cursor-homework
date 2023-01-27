"use strict";
const text = document.querySelector(`.test`);
const buttonGenrator = document.getElementById(`bnt-generator`);
const buttonFontUp = document.getElementById(`bnt-font-up`);
const buttonFontDown = document.getElementById(`bnt-font-down`);
let result = document.querySelector(`.result`);

buttonGenrator.onclick = () => {
  result.innerHTML = idGenerator.next().value;
};
buttonFontUp.onclick = () => {
  text.setAttribute(`style`, `font-size: ${fontGenerator.next(`up`).value}px`);
};
buttonFontDown.onclick = () => {
  text.setAttribute(
    `style`,
    `font-size: ${fontGenerator.next(`down`).value}px`
  );
};

// Функція генератора
const idGenerator = createIdGenerator();
function* createIdGenerator() {
  for (let i = 1; i < Infinity; i++) {
    yield i;
  }
}

// Функція збільшення шрифту
const fontGenerator = newFontGenerator(16);
function* newFontGenerator(option) {
  let value = option;
  let size = yield value;
  for (let i = 0; i < Infinity; i++) {
    if (size === "up") {
      value = value + 2;
      size = yield value;
    } else if (size === "down") {
      value = value - 2;
      size = yield value;
    }
  }
}
