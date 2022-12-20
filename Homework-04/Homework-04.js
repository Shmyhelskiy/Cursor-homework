"use strict";
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
const pairs = [
  ["Олександр", "Олена"],
  ["Ігор", "Іра"],
  ["Олексій", "Світлана"],
];

const pairsThemes = JSON.parse(JSON.stringify(pairs));
for (let i = 0; i < pairsThemes.length; i++) {
  pairsThemes[i].push(themes[i]);
}

const studentsMarks = [...students];
for (let i = 0; i < studentsMarks.length; i++) {
  studentsMarks[i] = [studentsMarks[i]];
  studentsMarks[i].push(marks[i]);
}

let resultOfWork = addMarks(pairsThemes, marks);
function addMarks(pairsThemes, marks) {
  const result = [];
  for (let i = 0; i < pairsThemes.length && marks.length; i++) {
    let randomNumber = Math.round(Math.random() * (5 - 1) + 1);
    result.push([...pairsThemes[i], randomNumber]);
  }
  fixArr(result);
  return result;
}
function fixArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i][1] = arr[i][0] + ` i ` + arr[i][1];
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].splice(0, 1);
  }
}

alert(`Результати в консолі`);
console.log(`Створені пари: `, pairs);
console.log(`Теми для пар: `, pairsThemes);
console.log(`Індивідуальні оцінки: `, studentsMarks);
console.log(`Оцінки груп :`, resultOfWork);
