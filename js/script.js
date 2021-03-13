var board = document.querySelector(".board");
var boardLetters = document.querySelector(".letters");
var boardNumbers = document.querySelector(".numbers");
var boardNumbersRotate = document.querySelector(".rotate_numbers");
var boardLettersRotate = document.querySelector(".rotate_letters");
var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
var black = false;
var index = 0;

//рисуем буквы и цифры
function numLet(p1, p2) {
    var num = 1;
    for (var j = 0; j < 8; j++) {
        var letter = document.createElement("li");
        letter.textContent = letters[j];
        p1.appendChild(letter);
        var numbers = document.createElement("li");
        numbers.textContent = num++;
        p2.appendChild(numbers);
    }
}

//Рисуем доску
function drawBoard(p) {
    for (var i = 1; i <= 64; i++) {
        var block = document.createElement("div");
        if (black) {
            block.classList.add("block");
            block.classList.add("black");
            index++;
            black = !black;
        } else {
            block.classList.add("block");
            block.classList.add("white");
            index++;
            black = !black;
        }
        p.appendChild(block);
        if (index == 8) {
            black = !black;
            index = 0;
        }
    }
}
numLet(boardLetters, boardNumbers);
numLet(boardLettersRotate, boardNumbersRotate);
drawBoard(board);