'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function getHiddenNumber() {
    let min = 1,
        max = 100;

    function getRandomHiddenNumber() {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return getRandomHiddenNumber();
}

function getUserNumber(text) {
    let userNumber = prompt(text);
    if (!isNumber(userNumber) && userNumber !== null) {
        return getUserNumber('Введите число!');
    } else if (userNumber === null) {
        return alert('Игра окончена');
    } else {
        return +userNumber;
    }
}

function checkMatch(hiddenNumber, text) {
    let userNumber = getUserNumber(text);
    if (userNumber > hiddenNumber) {
        checkMatch(hiddenNumber, 'Загаданное число меньше');
    } else if (userNumber < hiddenNumber) {
        checkMatch(hiddenNumber, 'Загаданное число больше');
    } else {
        alert('Поздравляю! Вы угадали!');
    }
}

let hiddenNumber = getHiddenNumber();
checkMatch(hiddenNumber, 'Введите число от 1 до 100');