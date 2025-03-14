const isAdmin = true;
const canWrite = true;

console.log (`Системный файл ${isAdmin && canWrite}`); //булевое И то И то
console.log (`Обычный файл ${isAdmin || canWrite}`); //булевое ИЛИ
console.log (`Инвертируем права админа ${!isAdmin}`); //булевое НЕ

const isEdited = true;
const isSuperAdmin = true;

console.log (`Системный файл с редактированием ${
    isAdmin && canWrite && (!isEdited || isSuperAdmin) 
}`); 
/*
если я админ и могу писать этот файл НЕ(!) редактируется или я супер админ 
аналог switch case с вариантами
*/ 

// другие типы
console.log ("Vasya" && "Oleg"); //по умолчанию выводится Второй если первый тру
console.log ("Vasya"|| "Oleg"); //по умолчанию выводится Первый если он тру


let a = "Марина";
const username = a || "Vanya";
console.log (username); //подставить поумолчанию Второй если первого нет

const admin = true;
const fileName = admin && "file.mp4";
console.log (fileName);
