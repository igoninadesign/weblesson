/* Вася положил 12 000$ на 7% годовых
с капитализацией один раз в месяц
Вывести в консоль сможет ли он купить дом за 13500$
через 2 года после снятия вклада. И будет ли остаток? Какой?

Итог = сумма * (1 + ставка в месяц не в процентах)^ срок в месяцах
*/

const deposit = 10000;
const rate = 0.07;
const depositLeught = 24;
const houseCost = 13500;

const total = deposit * (1 + 0.07/12)**24;
if (total>houseCost) {
    console.log (`Мы накопили: ${total} , Можем купить дом. Остаток ${total-houseCost}`)
}else{
    console.log (`Мы накопили: ${total} ,Денег не достаточно`)
} 
