/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

//Спрашиваем число и проверяем, подходит ли оно нам
do {
    var num = +prompt("Введите число от 0 до 999: ");
} while (!numTrue(num));

//проверка введенного числа
function numTrue(n) {
    if (isNaN(n)) {
        alert("Вы ввели не число!");
        return false;
    } else if (n < 0 || n > 999) {
        alert("Вы ввели число вне диапазона!");
        return false;
    }
    return true;
}

//преобразуем число на сотни, десятки и еденицы
hu = parseInt(num / 100);
de = parseInt((num - hu * 100) / 10);
ed = parseInt(num - hu * 100 - de * 10);
//создаем обьект
function NumToObject(one, tens, hundreds) {
    this.one = one;
    this.tens = tens;
    this.hundreds = hundreds;
    this.show = function() {
        console.log(
            "еденицы: " +
            this.one +
            " десятки: " +
            this.tens +
            " сотни: " +
            this.hundreds
        );
    };
}
//принимаем значение и выводим результат в консоль
var myObj = new NumToObject(ed, de, hu);
myObj.show();