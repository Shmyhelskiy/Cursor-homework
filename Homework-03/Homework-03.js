"use strict";
// Функція №1 вивід найбільшої цифри з числа
const getMaxDigit = () => {
  const number = prompt("Введіть число", 0);
  const arr = number.split("").filter((item) => {
    return parseInt(item) == item;
  });
  const result = Math.max(...arr);
  return alert(`Найбільша цифра у числі  = ${result}`);
};

//Функція №2 Піднесення до степені
const powNumber = () => {
  const number = Number(prompt("Введіть число", 0));
  if (typeof number !== "number" || isNaN(number))
    return alert("Ви написали не число");
  const pow = Number(prompt("Введіть до якої степені підносити", 0));
  if (typeof pow !== "number" || isNaN(pow))
    return alert("Ви написали не число");
  if (pow === 0) return alert(`Результат = 1`);
  let result = number;
  if (pow > 0) {
    for (let i = 1; i < pow; i++) {
      result *= number;
    }
    return alert(`Результат = ${result}`);
  } else if (pow < 0) {
    for (let i = -1; i > pow; i--) {
      result *= number;
    }
    return alert(`Результат = ${1 / result}`);
  }
};

// Функція №3 Повернення слова з заглавною літерію
const getCapitalLetter = () => {
  const name = prompt(`Введіть текст`);
  if (typeof name !== "string" || name === "")
    return alert("Ви нічого не ввели");
  const arr = name.split("");
  let result = arr.map((item) => {
    return item.toLowerCase();
  });
  result[0] = result[0].toUpperCase();
  result = result.join("");
  return alert(`Ваш текст виправлено: ${result}`);
};

// Функція №4 Обрахунок чистого прибутку
const netProfit = () => {
  const profit = Number(prompt(`Введіть ваш дохід`, 0));
  const tax = 19.5;
  if (typeof profit !== "number" || isNaN(profit))
    return alert("Ви написали не число");
  if (profit <= 0) return alert("Ваш дохід замалий, спробуй знайти роботу");
  const result = profit - (profit * tax) / 100;
  return alert(`Ваш дохід станвоить: ${result}`);
};

// Функція №5 Рандомне число
const randomNumber = () => {
  const firstnumber = Number(prompt("Введіть початкеве число", 0));
  if (typeof firstnumber !== "number" || isNaN(firstnumber))
    return alert("Ви написали не число");
  const secondNumber = Number(prompt("Введіть число", 0));
  if (typeof secondNumber !== "number" || isNaN(secondNumber))
    return alert("Ви написали не число");
  let result = Math.round(
    Math.random() * (secondNumber - firstnumber) + firstnumber
  );
  return alert(
    `Створено рандомне число = ${result}, у діапазоні з ${firstnumber} по ${secondNumber}`
  );
};

// Функція №6 Пошук повторююмих букв
const countLetter = () => {
  const word = prompt(`Введіть текст`);
  if (typeof word !== "string" || word === "")
    return alert("Ви нічого не ввели");
  const letter = prompt(`Введіть букву яку будемо рахувати`);
  if (typeof letter !== "string" || letter === "")
    return alert("Ви нічого не ввели");
  const arr = word.toLowerCase().split("");
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === letter.toLowerCase()) {
      result++;
    }
  }
  if (result > 0)
    return alert(`У вашому тексті: ${word} ${result} букв ${letter}`);
  return alert("В вашому тексті немає таких букв");
};

// Функція №7 Конвертор валют
const convertCurrency = () => {
  const value = prompt(
    `Введіть скільки конвертує ( обовязково з позначенням $ або UAH)`
  );
  if (typeof value !== "string" || value === "")
    return alert("Ви нічого не ввели");
  const checkDollar = value.indexOf("$");
  const checkUah = value.toLowerCase().indexOf("uah");
  let arr = value.toLowerCase().split("");
  let result = 0;
  if (checkDollar > 0) {
    arr.splice(checkDollar);
    result = Number(arr.join("")) * 40;
  } else if (checkUah > 0) {
    arr.splice(checkUah);
    result = Number(arr.join("")) / 40;
  } else if (checkDollar < 0 || checkUah < 0)
    return alert("Ви ввели не коректні данні");
  return alert(`Результат конвертації = ${result}`);
};

// Функція №8 Генерація паролю
const randomPass = () => {
  const number = Number(prompt("Введіть довжину паролю", 8));
  if (typeof number !== "number" || isNaN(number))
    return alert("Ви написали не число");
  let arr = [];
  if (number > 0) {
    for (let i = 0; i < number; i++) {
      arr.push(Math.random().toFixed(1) * 10);
    }
  } else {
    for (let i = 0; i < 8; i++) {
      arr.push(Math.random().toFixed(1) * 10);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
      arr[i] = 1;
    }
  }
  return alert(`Ваш пароль: ${arr.join("")}`);
};

// Функція №9 видалення тексту
const deleteLetters = () => {
  const text = prompt(`Введіть текст`);
  if (typeof text !== "string" || text === "")
    return alert("Ви нічого не ввели");
  const letter = prompt(`Введіть букву яку будемо видаляти`);
  if (typeof letter !== "string" || letter === "")
    return alert("Ви нічого не ввели");
  let arr = text.toLowerCase().split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== letter) {
      result.push(arr[i]);
    }
  }
  return alert(`Текст після видалення ${result.join("")}`);
};
console.log(deleteLetters());
// Функція №10 перевірки на поліндром
const isPalyndrom = () => {
  const text = prompt(`Введіть текст`);
  if (typeof text !== "string" || text === "")
    return alert("Ви нічого не ввели");
  const originalText = text.toLowerCase().split("");
  const reverseText = text.toLowerCase().split("").reverse();
  for (let i = 0; i < originalText.length; i++) {
    if (originalText[i] !== reverseText[length - [i]]) {
      return alert("Текст не є поліндромом");
    } else return alert("Текст є поліндромом");
  }
};

//Функція Виводу
const outputFunction = () => {
  const number = Number(prompt("Оберіть функці від 1 - 10", 0));
  if (typeof number !== "number" || isNaN(number) || number === 0)
    return alert("Ви нічого не ввели");
  switch (number) {
    case 1:
      return getMaxDigit();
      break;
    case 2:
      return powNumber();
      break;
    case 3:
      return getCapitalLetter();
      break;
    case 4:
      return netProfit();
      break;
    case 5:
      return randomNumber();
      break;
    case 6:
      return countLetter();
      break;
    case 7:
      return convertCurrency();
      break;
    case 8:
      return randomPass();
      break;
    case 9:
      return deleteLetters();
      break;
    case 10:
      return isPalyndrom();
      break;
    default:
      alert(`Упс ви щось зробили не вірно`);
  }
};

document.querySelector(".function-button").onclick = outputFunction;
