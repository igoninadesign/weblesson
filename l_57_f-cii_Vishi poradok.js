// функции высшего порядка принимают и/или возвращают другую функцию
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function calculate(a, b, fn){ //функция высшего порядк callback
    console.log(fn.name); //вызываем имя функции
    const res = fn(a, b);
    return res;
}
let res = calculate(3, 5, add); //считаем сложение
console.log(res);
res = calculate(3, 5, subtract);
console.log(res);

// возврат другой функции в функции
// function power(pow){
//     return function(num){
//         return num**pow;
//     }
// }

const power = pow => num => num**pow; //запись функции выше в виде стрелочной

const powerOfTwo = power(2) //это степень 
console.log(powerOfTwo(5)); //а здесь то число которое возводим в степень 

const powerOfThree = power(3) //это степень 
console.log(powerOfThree(5))

console.log(power(5)(4)) //первое степень, а второе число

function a(num, b) {
    return b(num);
}
console.log(a(1, (n) => n + 5));


