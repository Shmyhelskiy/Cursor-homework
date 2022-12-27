"use strict";
const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// Функція повернення дисциплін
const getSubjects = (students) => {
  const arrSubjects = [];
  for (let key in students.subjects) {
    arrSubjects.push(key);
  }
  const result = arrSubjects.map((item) => {
    if (item.includes(`_`)) {
      item = item[0].toUpperCase() + item.slice(1);
      return item.replace(`_`, ` `);
    } else return (item = item[0].toUpperCase() + item.slice(1));
  });
  return arrSubjects;
};

// Функція поверненя середньої оцінки
const getAverageMark = (students) => {
  const arrSubjectsMarks = [];
  for (let key in students.subjects) {
    arrSubjectsMarks.push(students.subjects[key]);
  }
  const marks = arrSubjectsMarks.flat();
  const AvarageMark = (
    marks.reduce((acc, item) => acc + item, 0) / marks.length
  ).toFixed(2);
  return AvarageMark;
};

// Функція виведення інформації про студента
const getStudentInfo = (students) => {
  students.AverageMark = getAverageMark(students);
  delete students.subjects;
  return students;
};

// Функція виводу їмен студентів
const getStudentsNames = (students) => {
  const studentsNames = [];
  for (let key in students) {
    studentsNames.push(students[key][`name`]);
  }
  studentsNames.sort();
  return studentsNames;
};

// Функція перевірки найкращого студента
const getBestStudent = (students) => {
  for (let key in students) {
    students[key].AverageMark = getAverageMark(students[key]);
  }
  const avarageMarks = [];
  for (let key in students) {
    avarageMarks.push([students[key].name, students[key].AverageMark]);
  }
  avarageMarks.sort((a, b) => b[1] - a[1]);
  const theBestStudent = avarageMarks[0][0];
  return theBestStudent;
};
// Функція калькулятор бук в слові

const calculateWordLetters = (string) => {
  const arr = string.split("");
  const conteiner = {};
  for (let char of arr) {
    conteiner[char] = conteiner[char] ? conteiner[char] + 1 : 1;
  }
  return conteiner;
};

console.log("Предмети стеднта №0", getSubjects(students[0]));
console.log(`Середня оцінка стеднта №0`, getAverageMark(students[0]));
console.log(`Імена студентів`, getStudentsNames(students));
console.log((`Найкращий учень`, getBestStudent(students)));
console.log(
  `Результат функції calculateWordLetters`,
  calculateWordLetters(`text`)
);
