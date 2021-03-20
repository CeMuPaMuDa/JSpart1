var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
var black = true;

//рисуем буквы и цифры
function numLet(p1, p2) {
    var num = 8;
    for (var j = 0; j < 8; j++) {
        var letter = document.createElement("li");
        letter.textContent = letters[j];
        p1.appendChild(letter);
        var numbers = document.createElement("li");
        numbers.textContent = num--;
        p2.appendChild(numbers);
    }
}

//Рисуем доску
function drawBoard(p, text) {
    for (var i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            if (j == 0) {
                black = !black;
            }
            var block = document.createElement("div");
            if (black) {
                block.classList.add("block");
                block.classList.add("black");
            } else {
                block.classList.add("block");
                block.classList.add("white");
            }
            if (text[i] != undefined && text[i][j] != undefined) {
                block.innerHTML = text[i][j];
                if (i < 2) {
                    block.classList.add("rotate");
                } else if (i > 5) {
                    block.style.color = "#eee3b9";
                }
            }

            p.appendChild(block);
            black = !black;
        }
    }
}