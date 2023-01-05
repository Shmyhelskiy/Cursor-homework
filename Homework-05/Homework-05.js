"use strict";
function getRandomArray(length, min, max) {
  const arr = new Array(length);
  let randomArr = [...arr.keys()].map(
    (item) => (item = Math.round(Math.random() * (max - min) + min))
  );
  return randomArr;
}

function getAverage(...numbers) {
  const integerArr = checkIntegerNumber(numbers);
  const result = integerArr.reduce((acc, item) => acc + item, 0);
  return result / integerArr.length;
}

function getMedian(...numbers) {
  let integerArr = checkIntegerNumber(numbers).sort((a, b) => a - b);
  if (integerArr.length % 2 == 0) {
    return (
      (integerArr[integerArr.length / 2 - 1] +
        integerArr[integerArr.length / 2]) /
      2
    );
  } else return integerArr[Math.round(integerArr.length / 2) - 1];
}

function filterEvenNumbers(...numbers) {
  return numbers.filter((item) => item % 2 !== 0);
}

function countPositiveNumbers(...numbers) {
  const isNumber = numbers.filter((item) => typeof item === `number`);
  let positivNubers = isNumber.reduce((acc, item) => {
    if (item > 0) return acc + 1;
    return acc;
  }, 0);
  return positivNubers;
}

function getDividedByFive(...numbers) {
  return numbers.filter((item) => item % 5 == 0);
}

function replaceBadWords(string, badWords = [`shit`, `fuck`]) {
  const regExp = new RegExp(badWords.join(`|`), `gi`);
  const arr = string.split(" ");
  let newArr = arr.map((item) => {
    if (regExp.test(item)) {
      return item.replace(regExp, `****`);
    } else return item;
  });
  return newArr;
}

function findMode(array) {
  const integerArr = checkIntegerNumber(array);
  let object = {};
  for (let i = 0; i < integerArr.length; i++) {
    if (object[integerArr[i]]) {
      object[integerArr[i]] += 1;
    } else {
      object[integerArr[i]] = 1;
    }
  }
  const bigestValue = Math.max(...Object.values(object));
  const result = [];
  for (let key in object) {
    if (object[key] === bigestValue) {
      result.push(key);
    }
  }
  return result;
}

function checkIntegerNumber(numbers) {
  return numbers.filter((item) => Number.isInteger(item));
}

alert(`Приклади в консолі`);
console.log(
  `Приклад виклику getRandomArray(length(10), min(1), max(10)): `,
  getRandomArray(10, 1, 10)
);
console.log(
  `Приклад виклику getAverage(100,200, 25.5): `,
  getAverage(100, 200, 25.5)
);
console.log(
  `Приклад виклику getMedian(1, 2, 3, 4, 5.66, 23.1): `,
  getMedian(1, 2, 3, 4, 5.66, 23.1)
);
console.log(
  `Приклад виклику filterEvenNumbers(1, 2, 3, 4, 5): `,
  filterEvenNumbers(1, 2, 3, 4, 5)
);
console.log(
  `Приклад виклику countPositiveNumbers(1, 2, 3, -1, -2, true):`,
  countPositiveNumbers(1, 2, 3, -1, -2, true)
);
console.log(
  `Приклад виклику getDividedByFive(1, 5, 55, 32):`,
  getDividedByFive(1, 5, 55, 32)
);
console.log(
  `Приклад виклику replaceBadWords("Holy shit!, fuck"): `,
  replaceBadWords("Holy shit!, fuck", [`shit`, `Fuck`])
);
console.log(
  `Приклад виклику findMode([1, 2, 1, 5, 2.5,2.5]):`,
  findMode([1, 2, 1, 5, 2.5, 2.5])
);
