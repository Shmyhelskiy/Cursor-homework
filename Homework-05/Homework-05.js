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
  let findMidlIndex = 0;
  if (integerArr.length % 2 == 0) {
    return (findMidlIndex =
      (integerArr[integerArr.length / 2] +
        integerArr[integerArr.length / 2 - 1]) /
      2);
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
  const badWords = ["shit", "fuck"];
  const arr = string.split(" ");

  let newArr = arr.map((item) => {
    if (item.includes(`shit`)) {
      return item.replace(`shit`, `****`);
    } else return item;
  });
  return newArr.join(" ");
}
console.log(replaceBadWords("Holy shiting!, fuck"));

// function findMode(array) {
//   let object = {};
//   for (let i = 0; i < array.length; i++) {
//     if (object[array[i]]) {
//       object[array[i]] += 1;
//     } else {
//       object[array[i]] = 1;
//     }
//   }
//   let biggestValue = 0;
//   let biggestValuesKey = 0;
//   let arr = [];
//   Object.keys(object).forEach((key) => {
//     let value = object[key];
//     if (value >= biggestValue) {
//       biggestValue = value;
//       biggestValuesKey = key;
//     }
//   });
//   return biggestValuesKey;
