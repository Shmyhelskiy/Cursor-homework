"use strict";
let numberN;
let numberM;

do {
    numberN = Number(prompt(`Введіть додатне ціле число`, 0));
} while (!Number.isInteger(numberN) || numberN < 0);
do {
    numberM = Number(prompt(`Введіть додатне ціле число більше за попередне`, 0));
} while (!Number.isInteger(numberM) || numberM < 0 || numberN > numberM);

let missEven = confirm(`Потрібно пропускати парні числа?`)
let result = 0;

for ( let i = numberN; i <= numberM; i++){
    if (!missEven){
        result += i;
    }else {
        if (i % 2 !== 0){
            result += i;
        }
    }
}

 alert(`Ваш результат = ${result}`);



