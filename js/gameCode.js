//После игры необходимо спросить номер вопроса.
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

//var answers = [];
stepNumber(quest[0]);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        stepNumber(quest[1]);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                stepNumber(quest[3]);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                stepNumber(quest[3]);

                break;
            case -1: // Второе действие
                break;
            default:
                alert("Ошибка");
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        stepNumber(num, quest[2]);
        switch (event) {
            case 1: // Второе действие
                stepNumber(quest[3]);

                break;
            case 2: // Второе действие
                stepNumber(quest[3]);

                break;
            case -1: // Второе действие
                break;
            default:
                alert("Ошибка");
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert("Ошибка");
}
alert("Спасибо за игру");

//------------------------------------------
function isAnswer(event) {
    if (isNaN(event) || !isFinite(event)) {
        alert("Вы ввели недопустимый символ");
        return false;
    } else if (event < 1 || event > 2) {
        alert("Ваше число выходит из допустимого диапозона");
        return false;
    }
    return true;
}

function havePrompt(n) {
    return n.question + n.answer1 + n.answer2 + "-1 - Выход из игры";
}

function stepNumber(n, p) {
    do {
        ok = false;
        event = +prompt(havePrompt(p));

        if (event == -1) {
            break;
        } else {
            ok = isAnswer(event);
            n++;
        }
    } while (!ok);
}