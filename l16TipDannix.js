// типы данных
let a = 5;
let b = 5.6;
console.log (typeof a); //вывести тип данных
console.log (typeof b);

a = "stroka" 
console.log (typeof a);

let isAdmin = a > 10; //true falls булевые значения-когда чтото сравнивается
console.log (typeof isAdmin);

let c;
console.log (typeof c); //undefind (еще не определенно значение)
c = 10;
console.log (typeof c);

let d = null;
console.log (typeof d); //конкретно пустое значение, но тип-обьект
console.log (typeof (d == null)); //внимание на скобочки
