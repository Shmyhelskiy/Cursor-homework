"use strict";
function getRandomArray(length, min, max) {
  const arr = new Array(length);
  let randomArr = [...arr.keys()].map(
    (item) => (item = Math.round(Math.random() * (max - min) + min))
  );
  return randomArr;
}

function getAverage(...numbers) {
  let integerArr = numbers.filter((item) => {
    if (Number.isInteger(item)) {
      return true;
    } else return false;
  });
  let result = integerArr.reduce((acc, item) => acc + item, 0);
  return result / integerArr.length;
}

function getMedian(...numbers) {
  let integerArr = numbers
    .filter((item) => {
      if (Number.isInteger(item)) {
        return true;
      } else return false;
    })
    .sort((a, b) => a - b);
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
  let positivNubers = numbers.reduce((acc, item) => {
    if (item > 0) return acc + 1;
    return acc;
  }, 0);
  return positivNubers;
}
function getDividedByFive(...numbers) {
  return numbers.filter((item) => item % 5 == 0);
}

function replaceBadWords(string) {
  const badWords = /shit|fuck/gi;
  const arr = string.split(" ");
  let newArr = arr.map((item) => {
    if (badWords.test(item)) {
      return item.replace(badWords, `****`);
    } else return item;
  });
  return newArr.join(" ");
}

function findMode(array) {
  let object = {};
  for (let i = 0; i < array.length; i++) {
    if (object[array[i]]) {
      object[array[i]] += 1;
    } else {
      object[array[i]] = 1;
    }
  }
  let biggestValue = 0;
  let biggestValuesKey = 0;
  Object.keys(object).forEach((key) => {
    let value = object[key];
    if (value >= biggestValue) {
      biggestValue = value;
      biggestValuesKey = key;
    }
  });
  return biggestValuesKey;
}

alert(`Приклади в консолі`);
console.log(
  `Приклад виклику getRandomArray(length(10), min(1), max(10)): `,
  getRandomArray(10, 1, 10)
);
console.log(`Приклад виклику getAverage(100,200): `, getAverage(100, 200));
console.log(`Приклад виклику getMedian(1, 2, 3, 4): `, getMedian(1, 2, 3, 4));
console.log(
  `Приклад виклику filterEvenNumbers(1, 2, 3, 4, 5): `,
  filterEvenNumbers(1, 2, 3, 4, 5)
);
console.log(
  `Приклад виклику countPositiveNumbers(1, 2, 3, -1, -2):`,
  countPositiveNumbers(1, 2, 3, -1, -2)
);
console.log(
  `Приклад виклику getDividedByFive(1, 5, 55, 32):`,
  getDividedByFive(1, 5, 55, 32)
);
console.log(
  `Приклад виклику replaceBadWords("Holy shit!, fuck"): `,
  replaceBadWords("Holy shit!, fuck")
);
console.log(
  `Приклад виклику findMode([1, 2, 1, 5]) (Моду шукає тільки одну):`,
  findMode([1, 2, 1, 5])
);
