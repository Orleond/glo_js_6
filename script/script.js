'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function getNumberAttempts() {
    let finish = 0;

    return function getNumberAttemptsLeft(start) {
        if (start !== finish) {
            return --start;
        }
    };
}

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

function checkMatch(hiddenNumber, text, attempts) {
    let numberAttempts = getNumberAttempts();
    let userNumber = getUserNumber(text);
    if (userNumber > hiddenNumber && attempts > 0) {
        attempts = numberAttempts(attempts);
        checkMatch(hiddenNumber, 'Загаданное число меньше, осталось ' + attempts + ' попыток(ка)', attempts);
    } else if (userNumber < hiddenNumber && attempts > 1) {
        attempts = numberAttempts(attempts);
        checkMatch(hiddenNumber, 'Загаданное число больше, осталось ' + attempts + ' попыток(ка)', attempts);
    } else if (attempts === 1) {
        if (confirm('Попытки закончились. Хотите сыграть ещё?')) {
            let hiddenNumber = getHiddenNumber();
            checkMatch(hiddenNumber, 'Введите число от 1 до 100', 10);
        } else {
            alert('Спасибо за игру, удачи!');
        }
    } else {
        if (confirm('Поздравляю! Вы угадали! Хотите сыграть ещё?')) {
            let hiddenNumber = getHiddenNumber();
            checkMatch(hiddenNumber, 'Введите число от 1 до 100', 10);
        } else {
            alert('Спасибо за игру, удачи!');
        }
    }
}



let hiddenNumber = getHiddenNumber();
checkMatch(hiddenNumber, 'Введите число от 1 до 100', 10);