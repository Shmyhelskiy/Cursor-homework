"use strict";
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
// Функція створення пар
const getPairs = () => {
  const boys = [];
  const girls = [];
  for (let i = 0; i < students.length; i++) {
    const element = students[i];
    if (element.slice(-1) === "а") {
      girls.push(element);
    } else {
      boys.push(element);
    }
  }
  const pairs = [];
  for (let i = 0; i < boys.length; i++) {
    pairs.push([boys[i], girls[i]]);
  }
  return pairs;
};
const pairs = getPairs();
// Функція створення тем для пар
const getpairsThemes = () => {
  let result = JSON.parse(JSON.stringify(pairs));
  for (let i = 0; i < result.length; i++) {
    result[i][0] = result[i].join(` i `);
    result[i].splice(1, 1);
  }
  for (let i = 0; i < result.length; i++) {
    result[i].push(themes[i]);
  }
  return result;
};
const pairsThemes = getpairsThemes();
// Створення оцінок студентів
const studentsMarks = [...students];
for (let i = 0; i < studentsMarks.length; i++) {
  studentsMarks[i] = [studentsMarks[i]];
  studentsMarks[i].push(marks[i]);
}
// Функція створення оцінок груп
let resultOfWork = addMarks(pairsThemes, marks);
function addMarks(pairsThemes, marks) {
  const result = [];
  for (let i = 0; i < pairsThemes.length && marks.length; i++) {
    let randomNumber = Math.round(Math.random() * (5 - 1) + 1);
    result.push([...pairsThemes[i], randomNumber]);
  }
  return result;
}

alert(`Результати в консолі`);
console.log(`Створені пари: `, pairs);
console.log(`Теми для пар: `, pairsThemes);
console.log(`Індивідуальні оцінки: `, studentsMarks);
console.log(`Оцінки груп :`, resultOfWork);
