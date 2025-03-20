//цикл для потворяющегося действия, обязательно должен быть конечный
for(let i = 1; i < 10; i++){
    console.log(`наш баланс ${i}`);
} //три аргумента:с которого начинаем; когда завершаем; что делаем

const task = ['task1', 'task2'];
for(let t = 0; t < task.length; t++){ //указываем что вопроизводить цикл до конца массива
    console.log(task[t]);
}

const task2 = ['task3', 'task4', 'task5'];
for(let u = 0; u < task2.length; u++){ //указываем что вопроизводить цикл до конца массива
    if(task2[u]=== 'task4'){
        continue; //пропускает элемент и исполняется дальше
    }
    console.log(task2[u]);
}

const task3 = ['task3', 'task4', 'task5'];
for(let u = 0; u < task3.length; u++){ //указываем что вопроизводить цикл до конца массива
    if(task3[u]=== 'task4'){
        break; //останавливается исполнение
    }
    console.log(task3[u]);
}

/*
задача
вывести в консоль строку "я люблю JS !" из массива
проходя циклом в обратном порядке, не используя метод reverse
const arr = ['!', 'JS', 'love', 'I'];
*/
const arr = ['!', 'JS', 'love', 'I'];
let newArr = [];
for(let j = 0; j <arr.length; j++ ){
    newArr.unshift(arr[j]);
   
}
console.log (newArr.join(' '))

//цикл в цикле
// for(let q = 1; q < 5; q++){
//     console.log(`Cikl1 - ${q}`);
//     for(let w = 1; w < 5; w++){ //ввести новую переменную
//         console.log(`Cikl2 - ${w}`); //выполняется второй цикл после каждого первого
//     }
// }

console.log('--------------------------');

const cases = [[1, "case1"], [2, "case2"]];
for(let e = 0; e < cases.length; e++){
    for(let r = 0; r < cases[e].length; r++){
        console.log(cases[e][r]);
    }
}

//while пока верно выполняется 
const arr2 = [1, 3, 4, 8, 7];
let o = 0
while(arr2[o] <= 5 && arr2.length){
    console.log(arr2[o]);
    o++
}

let p = 0;
do {
    console.log(p);
    p++
} while (p < 0);

//если нужно просто перебрать массив for of, если не нужен индекс
for(let element of arr2){ //возвращает элемент
    console.log(element);
}

for(let index in arr2){
    console.log(index); //возвращает индекс элемента
}
for(let index in arr2){
    console.log(arr2[index]); //возвращает индекс элемента
}

/*
Есть выгрузка операций пользователя
const operation = [1000, -700, 300, -500, 10000];
начальный баланс 100
необходимо сделать ф-цию расчета
- итоговый баланс
- наличие отрицательного баланса( если баланс отрицательный после очередной операции 
выдать false)
- расчет среднего расхода и среднего дохода
 */

const operation = [1000, -700, 300, -500, 10000];
const startingBalance =100;
function getBalance(arrOfOperation, initailBalance) {
    let balance = initailBalance;
    for(let el of arrOfOperation){ 
       balance += el;
    }
    return balance;
}
console.log(getBalance(operation,startingBalance));

function chekOperation(arrOfOperation, initailBalance) {
    let balance = initailBalance;
    let isOk = true;
    for(let el of arrOfOperation){ 
       balance += el;
       if(balance < 0){
        isOk = false;
        break;
       }
    }
    return isOk;
}
console.log(chekOperation(operation,startingBalance));

function avarageOperation(arrOfOperation){
    let positivCount = 0;
    let positivSum = 0;
    let negativCount = 0;
    let negativSum = 0;
    for(const element of arrOfOperation){
        if (element > 0){
            positivCount++
            positivSum += element;
        }
        if (element < 0){
            negativCount++
            negativSum += element;
        }
    }
    return [positivSum / positivCount, negativSum / negativCount]; //среднее арифметичесоке
}
console.log(avarageOperation(operation));
