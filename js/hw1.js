//Задание №1
var tCelsium = prompt("Задание №1: Введите температуру по цельсию: ");
var tFaringate = (9 / 5) * tCelsium + 32;
alert("Температура по Фарингейту равна: " + tFaringate);
//Задание №2
var isName = "Василий";
var whoAdmin = isName;
alert (" Задание №2: Нашего админа зовут: " + whoAdmin);
//Задание №3
alert ("Задание №3: И почему никто не придумал задание с номером 3?");
//Задание 4
alert ("Задание №4: Чему будет равно JS-выражение 1000 + `108`? А вот сейчас и проверим: ");
alert ("Результат: " + (1000 + "108"));
//Задание №5
alert ("Задание №5: Хорошо, разберемся");
//Доп задание
var a = +prompt("Введите число №1: ");
var b = +prompt("Введите число №2: ");
alert ("Число №1: = " + a + "          Число №2: = " + b);
a = a + b;
b = b - a;
b = -b;
a = a - b;
alert ("А теперь - Число №1: = " + a + "           Число №2: = " + b);

