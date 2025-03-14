/*
    Пользователь хочет преобрести игру в магазине
    Может это сделать если:
    - если баланс больше 1000 (balance)
    или число бонус больше 100 (bonusBalance)
    - oн не забанен (isBanned)
    - игра не куплена (isExist)
    - игра в продаже (isSelling)
    напишите условие для покупки и выведите результат в консоль
*/
const balance = 1200;
const bonusBalance = 90;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (balance > 1000 || bonusBalance >100)
    && !isBanned && !isExist && isSelling;

console.log (`могу купить игру ${
    canBuy ? "Да" : "Нет"
}`)

