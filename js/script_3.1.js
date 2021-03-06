//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
function primeNum(n) {
    i = 2;
    while (i < n) {
        if (n % i == 0) {
            return false;
        }
        i++;
    }
    return n > 1;
}

prime = 1;
arr = [];
while (prime <= 100) {
    if (primeNum(prime)) {
        arr.push(prime);
    }
    prime++;
}
console.log(arr);