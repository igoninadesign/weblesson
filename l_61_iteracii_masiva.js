const score = [5, 10, 0, 15]

for(const[i,el] of score.entries()){
    console.log(`Raund ${i+1}: ${el}`); //+1 потому что нет нулего раунда   
}


///for each итерация по массиву, нельзя прервать через break
score.forEach((el, i) => { //название элемента и его индекс
    console.log(`Raund ${i+1}: ${el}`);  
});

//map модифицирует массив, для преобразования одних данных в другие
const transactionInUsd = [10, -7, 50, -10, 100];
const transactionInRub = transactionInUsd.
    map((transaction, i)=>{
        return transaction * 60;
})
console.log(transactionInUsd);
console.log(transactionInRub);

//filter когда нужно отфильтровать элементы массива, возвращает новый массив
const operations = [100, -20, 7, -20, 50]
const positivOperations = operations.filter(operation=>{
    return operation > 0; //выбираем элементы позитивных операций
})
console.log(positivOperations);

//чейнинг- последовательное применение методов
const positivRubOperations = operations
    .filter(operation => {
        return operation > 0;
})
    .map(operation => operation * 60)
console.log(positivRubOperations);

/* Имеется массив изменения цен prices, где внутри 
1й элемент массива цена в момент Х
2й элемент массива цена в момент У
Нужно преобразовать данные в массив, где будут отображены 
только положительные изменения цен [100,150]
 */
const prices = [[100,200], [120,100], [200, 350]];
const deltaPrice = prices
    .map( product => product[1] - product[0] )
    .filter(price => price > 0 )
    
console.log(deltaPrice);

//reduce сужает масив по какому то принципу
const operations2 = [100, -20, 7, -30, 50]

let balance2 = 0;
for (const operation of operations2){
    balance2 +=operation;
}
console.log(balance2)

const finalOperations = operations2.reduce((acc, operation, i )=>{
    return acc+= operation; //увеличиваем на значение равное одной операции
},0)
console.log(finalOperations) //выводим сумму всех элементов

const minEl = operations2.reduce((acc, operation, i )=>{
    if(operation > acc){ //можем проверить логику
        return acc;
    } else {
        return operation
    } 
},0)
console.log(minEl) 

/* 
найти среднее значение последовательности с помощью reduce
*/
const arr = [1, 4, 4, 10];
let count = arr.length
const avg = arr.reduce((acc, num) =>{
    return acc += num
})
console.log(avg / count);

//find findIndex ищет элемент/ индекс первый кооторый подходит под условие
const arr2 = [2, 4, 4, 10];
let elGT5 =arr.find(el => el > 5); // вернет элемент
console.log(elGT5); //если эл-т не найден вернет undefind

let elGT5Index =arr.findIndex(el => el > 5); // вернет индекс элемента
console.log(elGT5Index); //если эл-т не найден вернет -1

//some проверяет наличие элемента true/false
const arr3 = [2, 4, 4, 10, 20];
function some(array, element) { //запись через функцию
    const res = array.find(el => el ===element);
    return res == undefined ? false : true;
}
console.log(some(arr3, 2));

console.log(arr.some(el => el ===0)); //через метод массива и сразу ввести значение

//flat делает массив с меньшей вложеностью глубины
const prices2 = [[2, 4], [3, 4], [10, [20,50]]];
const res = prices2.flat(2); //по умолчанию глубина 1, но можно указать другую цифрой
console.log(res);
const res2 = prices2.flatMap(el => el.concat([1]));
console.log(res2);
    // применение map потом flat, callback функция 

// мутирующий массив возвращает sort, по умолчанию работает со строками
const users = ['Vasya', 'Kate', 'Marina', 'Ann'];
console.log(users);
users.sort(); //сортирует по умолчанию с начала
console.log(users);

const operations4 =[100, -300, -100, 50, 480];
// < 0 - a, b сохраняем порядок
// > 0 - b, a меняем порядок
operations4.sort((a, b) => {
    if (a > b) { 
        return 1
    }
    if (a < b) {
        return -1
    }
}); 
console.log(operations4); //по возрастанию
operations4.sort((a, b) => a - b); //короткая запись

operations4.sort((a, b) => {
    if (a < b) { 
        return 1
    }
    if (a > b) {
        return -1
    }
}); 
console.log(operations4); //по убыванию

//быстрое создание массива
console.log(new Array(1,2,3,4,5));
const arr5 = new Array(5);
console.log(arr5); //(5) [empty × 5]
arr5.fill(1);
console.log(arr5); //(5) [1, 1, 1, 1, 1]
arr5.fill(2, 3, 5);// каким элементом заполнить с какой по какую позицию
console.log(arr5); //(5) [1, 1, 1, 2, 2]

const arr6 = Array.from({ length : 5 },() => 5);
console.log(arr6); //(5) [5, 5, 5, 5, 5] равносильно new Array и потом .fill
const arr7 = Array.from({ length : 5 },(cur, i) => i + 1);
console.log(arr7); //(5) [1, 2, 3, 4, 5]



let arr10 = [1, 2, 3];
let res10 = arr10.map(e => e * 2).find(e => e < 5);
console.log(res10);

let arr11 = [1, 2, 3];
let res11 = arr11.map(e => [e * 2]).flat().reduce((acc, el) => acc -= el, 0)
console.log(res11);