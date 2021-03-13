var board1 = document.querySelector(".board1");
var board2 = document.querySelector(".board2");
var board3 = document.querySelector(".board3");
var black = false;
var index = 0;

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
drawBoard(board1);
drawBoard(board2);
drawBoard(board3);