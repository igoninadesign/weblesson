const q = Number (prompt (`введите число`));
if (q===7){
    console.log ("угадал!");
} else {
    console.log("не угадал");
}

// const f = Number (prompt (`введите число`));
// switch (f){
//     case 7:
//         console.log ("угадал!");
//         break;
//     case 3:
//         console.log ("не угадал!");
//         break;
//     default:
//         console.log ("попробуй еще раз!");
// }
//для краткой проверки 

const role = "admin";
switch (role) {
    case "manager":
        console.log ("manager");
        break;
    case "admin":
        console.log ("admin");
        break;
    case "ceo":
        console.log ("ceo");
        break;
    default:
        console.log ("мы тебя не знаем!");
}


//если два варианта верны
switch (role) {
    case "manager":
    case "admin":
        console.log ("не руководитель");
        break;
    case "ceo":
        console.log ("руководитель");
        break;
    default:
        console.log ("мы тебя не знаем!");
}