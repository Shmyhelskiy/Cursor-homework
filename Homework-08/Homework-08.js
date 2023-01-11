class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
  }

  getInfo() {
    console.log(
      `Студент ${this.course + "го"} курсу, ${(this, this.university)},${
        (this, this.fullName)
      }`
    );
  }

  get marks() {
    if (this.deducted === true) {
      return "Студент відрахований";
    }
    if (this.studentsMarks === undefined) {
      return "Студент ще немає оцінок";
    }
    return this.studentsMarks;
  }

  set marks(singlMark) {
    if (this.deducted === true) {
      return;
    }
    this.studentsMarks;
    if (this.studentsMarks) {
      this.studentsMarks.push(singlMark);
    } else {
      this.studentsMarks = [];
      this.studentsMarks.push(singlMark);
    }
  }

  getAverageMarks() {
    if (this.studentsMarks === undefined) {
      return 0;
    }
    let result =
      this.studentsMarks.reduce((sum, item) => sum + item, 0) /
      this.studentsMarks.length;
    return (this.averageMarks = result);
  }

  dismiss() {
    return (this.deducted = true);
  }
  recover() {
    return (this.deducted = false);
  }
}

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    this.scholarship = setInterval(() => this.getScholarship(), 30000);
  }

  getScholarship() {
    if (this.deducted === true) {
      this.scholarship = `Студент відрахований`;
    } else {
      if (this.getAverageMarks() >= 4) {
        this.scholarship = 1400;
        console.log(`Ви отримали 1400 грн. стипендії`);
      } else if (this.getAverageMarks() < 4 && this.getAverageMarks() !== 0) {
        this.scholarship = `Студент має погану успішність`;
      } else if (this.getAverageMarks() == 0) {
        this.scholarship = `Студент ще не отримав  жодної оцінки`;
      }
    }
  }
}

const student1 = new Student(
  `Вища Школа Психології`,
  1,
  "Остап Родоманський Бендер"
);
const student2 = new BudgetStudent(
  `Вища Школа Психології`,
  2,
  "Сергій Олександрвоич Сніжко"
);
