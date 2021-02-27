// Задание № 1. Дан код:
var a = 1,
    b = 1,
    c,
    d;
c = ++a;
alert(c); // 2
/* префиксная форма возвращает новое значение,
c = 2; a = 2; */

d = b++;
alert(d); // 1
/* постфиксная форма возвращает старое значение
b = 2; но d = 1, так как d присвоило старое значение b */

c = 2 + ++a;
alert(c); // 5
/* еще раз увеличили a, a = 3, c использует новое значение a,
 и получается сложение 2+3, что жало в результате 5 */

d = 2 + b++;
alert(d); // 4
/* увеличили b на 1, значение b = 3, но в выражении снова использовали постфиксную форму, потому используем старое значение b,
которое до увеличения у нас равнялось 2, 2+2 =4 */
alert(a); // 3, выводим фактическое значение a, после 2х инкриментов
alert(b); // 3, выводим фактическое значение b, после 2х инкриментов

//Задание №2 Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
/*Ответ:
a = 4 (a *= 2 аналогично a = a * 2)
x = 5 (так как 1 + 4 )
*/