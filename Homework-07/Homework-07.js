const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
const country = prompt("Оберіть країну (ukraine, latvia, litva) ", `ukraine);
let salary = Number(prompt(`Введіть вашу зарплату`, 0));
const countries = {
  ukraine,
  latvia,
  litva,
};
// ФУнкція розрахунку сплаченого податку
function getMyTaxes(salary) {
  if (salary < 0) {
    salary = 0;
  }
  return (this.tax * salary).toFixed(0);
}

// Функція роозрахукуну середнього податку
function getMiddleTaxes() {
  return `Середній податок в країні становить: ${this.tax * this.middleSalary}`;
}

// Функція розрахунку загального податку
function getTotalTaxes() {
  return `Загальний сплачений податок в країні становить: ${
    this.tax * this.middleSalary * this.vacancies
  }`;
}

function getMySalary(country) {
  const conteiner = {};
  conteiner.salary = (Math.random() * (2000 - 1500) + 1500).toFixed(0);
  conteiner.taxes = getMyTaxes.call(country, conteiner.salary);
  conteiner.profit = conteiner.salary - conteiner.taxes;
  return console.log(conteiner);
}

let callgetMySalary = setInterval(() => getMySalary(countries[country]), 10000);
setTimeout(() => {
  clearInterval(callgetMySalary);
}, 50000);

const outputFunction = () => {
  switch (country) {
    case `ukraine`:
      return `Ваш сплачений податок: ${getMyTaxes.call(
        ukraine,
        salary
      )}, ${getMiddleTaxes.call(ukraine)}, ${getTotalTaxes.call(ukraine)}`;
      break;
    case `latvia`:
      return `Ваш сплачений податок: ${getMyTaxes.call(
        latvia,
        salary
      )}, ${getMiddleTaxes.call(latvia)}, ${getTotalTaxes.call(latvia)}`;
      break;
    case `litva`:
      return `Ваш сплачений податок: ${getMyTaxes.call(
        litva,
        salary
      )}, ${getMiddleTaxes.call(litva)}, ${getTotalTaxes.call(litva)}`;
      break;
    default:
      alert(`Упс ви щось зробили не вірно`);
  }
};
console.log(outputFunction());
