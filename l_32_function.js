function logName(name, surname) {
        console.log(`Мое имя ${name} ${surname}`);
}

logName ("Anton","Larichev"); //функция ничего не возвращает

//функция возвращает ( можно в переменную или напрямую в консоль)
function countDepositSum(depositInUSD, month, rate){
    return depositInUSD * (1 + rate / 12) ** month; 
} // return возвращает ответ функции который дальше можно использовать в const

const exemple1 = countDepositSum(1000, 24, 0.12);
console.log(exemple1);

const exemple2 = countDepositSum(1000, 48, 0.10);
console.log(exemple2);
/* у функции должно быть человекопонятное название 
и название аргумента(то что в скобочках)
аргумента может не быть и функция может ничего не возвращать 
*/

function powerOfTwo(num){
    return num * num;
}
console.log(powerOfTwo(5)); //функцию можно вызвать в консоль до объявления

const poft = function (num){ //анонимная функция потому что внутри конст
    return num *num ;
}
console.log(poft (6)); //нелья вызвать до объявления как любую константу

const port = num => num * num; //стрелочная функция до стрелки аргумент, после return
console.log (port(7));

const pot = num => {
    console.log(num)
    return num * num; //длиная запись стрелочной функции с расчетами
}
console.log (pot(8));

// УПРАЖНЕНИЕ переписать функцию в стрелочную
function toPower (num, power){
    const res = num ** power;
    return res;
}
console.log (toPower (2, 3));

const toPowerArrow = (num, power) => num ** power;
console.log (toPowerArrow (3, 3));



function power2(num, power=2){
    const res = num ** power;
    return res;
}; //если нужно значение по умолчанию
console.log (power2(2));


// условия в функциях
function canAccessWebsite (age){
    if (age < 18){
        return "No" //после этого не выполняется дальше если правильно
    }
    return "Yes" //можно не писать else
}
console.log (canAccessWebsite(19))

const canAccessWebsite2 = age => age < 18 ? "No": "Yes"
console.log (canAccessWebsite2(13))

//функция в функции
const KG_IN_USD = 7;
const KM_IN_USD = 5;
function calculateW (present){
    return present * KG_IN_USD;
}
function calculateKm (distance){
    return distance * KM_IN_USD;
}
function getExchagePrice (present1, present2, distance){
    const price1 = calculateW (present1);
    const price2 = calculateW (present2);
    const distancePrice = calculateKm (distance);
    return price1 + price2 + distancePrice;
}
console.log (getExchagePrice(1, 2, 10));

function getUser(id = 1, name) {
    console.log(id + ' ' + name);
}
getUser('Антон'); //Антон undefind


/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/

const costMacBook = 2000;

function credit(age, work) {
    if (age > 24 && work){
        return 500;
    }else if(age>24){
        return 100;
    }else{
        return 0;
    }
}

function canBuy(money, age, work){

    const credit = credit(age, work);
    const sum = money + credit;
    let message = sum >= costMacBook ? true : false
    return message
}

let answer = canBuy(1500,25,true); 

console.log(answer)
