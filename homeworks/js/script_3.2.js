/*2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

//Создаем корзину товаров
shoppingBasket = [{
        title: "Семена томатов",
        variety: "Президент  F1",
        price: 30.2,
        amount: 87,
    },
    {
        title: "Семена огурцов",
        variety: "Дружная семейка",
        price: 12,
        amount: 135,
    },
    {
        title: "Семена капусты",
        variety: "Колобок",
        price: 5.25,
        amount: 240,
    },
    {
        title: "Семена перца",
        variety: "Джемини F1",
        price: 28,
        amount: 56,
    },
];
console.log(shoppingBasket);

function countBasketPrice(myBasket) {
    var sum = 0;
    for (var item of myBasket) {
        sum += item.price * item.amount;
    }
    return sum;
}
console.log(
    "Сумма всех товаров в корзине: " + countBasketPrice(shoppingBasket) + " грн"
);