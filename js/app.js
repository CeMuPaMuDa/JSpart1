var board1 = document.querySelector(".board1");
var boardLetters1 = document.querySelector(".letters1");
var boardNumbers1 = document.querySelector(".numbers1");
var boardNumbersRotate1 = document.querySelector(".rotate_numbers1");
var boardLettersRotate1 = document.querySelector(".rotate_letters1");

var board2 = document.querySelector(".board2");
var boardLetters2 = document.querySelector(".letters2");
var boardNumbers2 = document.querySelector(".numbers2");
var boardNumbersRotate2 = document.querySelector(".rotate_numbers2");
var boardLettersRotate2 = document.querySelector(".rotate_letters2");

var board3 = document.querySelector(".board3");
var boardLetters3 = document.querySelector(".letters3");
var boardNumbers3 = document.querySelector(".numbers3");
var boardNumbersRotate3 = document.querySelector(".rotate_numbers3");
var boardLettersRotate3 = document.querySelector(".rotate_letters3");

var chessLetters = {
    0: ["Л", "К", "С", "Ф", "КР", "С", "К", "Л"],
    1: ["П", "П", "П", "П", "П", "П", "П", "П"],
    6: ["П", "П", "П", "П", "П", "П", "П", "П"],
    7: ["Л", "К", "С", "Ф", "КР", "С", "К", "Л"],
};

var chessFigure = {
    0: [
        "&#9820;",
        "&#9822;",
        "&#9821;",
        "&#9819;",
        "&#9818;",
        "&#9821;",
        "&#9822;",
        "&#9820;",
    ],
    1: [
        "&#9823;",
        "&#9823;",
        "&#9823;",
        "&#9823;",
        "&#9823;",
        "&#9823;",
        "&#9823;",
        "&#9823;",
    ],
    6: [
        "&#9817;",
        "&#9817;",
        "&#9817;",
        "&#9817;",
        "&#9817;",
        "&#9817;",
        "&#9817;",
        "&#9817;",
    ],
    7: [
        "&#9814;",
        "&#9816;",
        "&#9815;",
        "&#9813;",
        "&#9812;",
        "&#9815;",
        "&#9816;",
        "&#9814;",
    ],
};

numLet(boardLetters1, boardNumbers1);
numLet(boardLettersRotate1, boardNumbersRotate1);
drawBoard(board1, " ");

numLet(boardLetters2, boardNumbers2);
numLet(boardLettersRotate2, boardNumbersRotate2);
drawBoard(board2, chessLetters);

numLet(boardLetters3, boardNumbers3);
numLet(boardLettersRotate3, boardNumbersRotate3);
drawBoard(board3, chessFigure);