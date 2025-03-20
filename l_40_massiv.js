
const roles = ['user', 'admin', 'manager', 'superuser'] 
/* массив, может содержать разные данные, но чаще одинаковые 
индекс начинается с нулевой позиции
*/
console.log (roles); //для вывода всего массива
console.log (roles[0]); //для вывода конкретного элемента массива
console.log (roles.length); //метод вызова длины массива
console.log (roles[roles.length-1]);//метод обращения к последнему элементу массива

//современный синтаксис, может не подерживаться браузером
console.log (roles.at(0)); //вызов первого элекмента
console.log (roles.at(-1));//вызов последнего элемента массива

//можно использовать математические вычисления, тернарные операторы, не используется иф-элс
const ages = [2048 - 2020, 5 > 0 ? 5 : 0];
console.log (ages);

const users = ['ann', 'fedya', 'tony'];
console.log (users);
users [2]= 'marina'// для замены элемента внутри массива, 
console.log (users); //не можем перезаписать весь массив если он константа

//управление элементами массива
users.push('nick');//метод добавления элемента в конец
console.log (users);

users.unshift('lola'); //для добавления в начало
console.log (users);

const el =users.pop();//метод рор удаляет последний эл-т,как ф-ция -возвращает название эл-та
console.log (el);
console.log (users);

const el2 =users.shift();//метод shift удаляет первый эл-т,как ф-ция -возвращает название эл-та
console.log (el2);
console.log (users);

//поиск по массиву
//const roles = ['user', 'admin', 'manager', 'superuser'] 
console.log (roles.indexOf('admin')); //поиск элемента, показывает первое вхождение если несколько
console.log (roles.indexOf('super')); //если эл-та нет -всегда будет -1

//возвращает true/falls
console.log (roles.includes('admin'));
if (roles.includes('admin')){
    console.log('Доступ есть');   
}

//slice не меняет массив только выводит кусочек
const res = roles.slice(2); //отрезает массив с введенного индекса
const res2 = roles.slice(0, 2); // отрезает с первого (включ), до второго НЕвключая его
const res3 = roles.slice(0, -1); // отрицательный индекс-счет с конца массива

//splice меняет массив,убирая индекс, а второй аргумент определяет длину
// const res4 = roles.splice(1,3);
// console.log (res4); //здесь с индекса и длина указаная вторым аргументом
// console.log (roles);// все что осталось после splice

//reverce переворачивает масив с ног на голову и модифицирует исходный
const res5 = roles.reverse();
console.log (res5);
console.log (roles);

//concat добавить новые элементы
const newRole = ['sysadmin', 'developer'];
const res6 = roles.concat(newRole);
console.log (res6);


const url = 'auth/user/login';
const res7 = url.split('/'); //разбиваем строку на массив данных по знаку
console.log (res7); //(3) ['auth', 'user', 'login']

// const roles = ['user', 'admin', 'manager', 'superuser'] 
console.log (roles.join('-')); //superuser-manager-admin-user переводим массив в строку

/*УПРАЖНЕНИЕ
дан список задач
const task = ['Задача1'];
сделать функции:
-добавить задачу в конце
-удалить задачу по названию
-перенос задачи в начало списка по названию
всегда меняем исходных массив
*/

let tasks = ['do it'];
console.log (tasks);
tasks.push ('work', 'traine');
console.log (tasks); //-добавить задачу в конце
const index = tasks.indexOf('do it');
console.log (tasks);
tasks.splice (index,1);
console.log (tasks); //-удалить задачу по названию

const index2 = tasks.indexOf('traine');
console.log(index2);
let findStr = tasks[index2]
console.log(findStr);
tasks.splice(index2, 1);
tasks.unshift(findStr);
console.log(tasks);

//деструктуризация
const userData = ['Fedya', 19, 'Minsk'];
const [userName, _, city] = userData; //подчеркивание если элемент не нужно выводить 
console.log(userName,city); //разбиваем структуру массива на отдельные элементы
 
//rest оператор, когда нужно взять часть массива а остаток сложить в другую переменную
const data = [1, 2, 3, 4, 5, 6, 7, 8];
const[one, two, ...others] = data; //...это вызывает rest
console.log(one,two,others); //1 2 (6) [3, 4, 5, 6, 7, 8]

/*дан произвольный урл 
https://purpleschool.ru/course/javascript
нужно сделать функцию которая выводит в консоль
- протокол https
- доменное имя purpleschool.ru
- путь внутрі сайта course/javascript
*/

const url2 = 'https://purpleschool.ru/course/javascript';
const mas = url2.split('/');
console.log (mas); //(5) ['https:', '', 'purpleschool.ru', 'course', 'javascript']
mas.splice(1,1);
const [protocol, domen, ...inSite] = mas;
console.log(protocol, domen, '/'+ inSite.join('/')); //https: purpleschool.ru course/javascript

//вариант коуча
const url3 = 'https://purpleschool.ru/course/javascript';
function getUrlPaths(url3){
    const[protocol, _, host, ...path]= url3.split('/');
    if (protocol === 'https:' || protocol === 'http:') { //защита на правильный формат данных
        console.log(protocol, _, host, ...path);
        console.log(`Протокол: ${protocol.split(':')[0]}`);
        console.log(`Доменное имя ${host}`);
        console.log(`Путь внутри сайта  /${path.join('/')}`);
    }
}
getUrlPaths(url3)