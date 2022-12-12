"use strict";
const banana = 15.678;
const potato = 123.965;
const orange = 90.2345;

const maxNumber = (`Max number is:`,Math.max(banana, potato, orange));
const minNumber = (`Min number is:`, Math.min(banana, potato, orange));

const amount = banana + potato + orange;

const wholeAmount = Math.floor(banana) + Math.floor(potato) + Math.floor(orange);
const roundAmount = Math.round(amount / 100) * 100;

let resultOfPair = (wholeAmount % 2) ? 'Число не парне' : 'Число є парним';

const rest = 500 - amount;

const avaragePrice = (amount / 3).toFixed(2);

let discount = Math.random();

let toPay = (amount  - (amount * discount).toFixed(2)).toFixed(2);

let netProfit = (amount / 2 - (amount * discount)).toFixed(2); 

alert(
    `Максимальне число з усіх = ${maxNumber}
    Мінімальне число з усіх = ${minNumber}
    Вартість всіх товарів становить = ${amount}
    Сума товарів без копійок = ${wholeAmount}
    Округлена до сотень сума товарів = ${roundAmount}
    Чи є округлена сума товарів парним числом? ${resultOfPair}
    Решта після оплати клієнтом(500) ${rest}
    Середне значеня цін ${avaragePrice}
    Знижка становить ${(discount * 100).toFixed(0)}%
    До сплати з урахуванням знижки ${toPay}
    Чистий прибуток станвоить ${netProfit}`
);
