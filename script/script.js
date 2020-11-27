'use strict';


function getHiddenNumber() {
    let min = 1,
        max = 100;

    function number() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return number();
}

function getNumber(text) {
    let userNumber = prompt(text);

    if (isNaN(parseFloat(userNumber)) && userNumber !== null) {
        return getNumber('Введите число! (от 1 до 100):');
    } else if (userNumber === null) {
        return 'Игра окончена';
    } else {
        return +userNumber;
    }
}

function checkNumber(userNumber, hiddenNumber) {
    if (userNumber === 'Игра окончена') {
        alert('Игра окончена');
    } else if (userNumber > hiddenNumber) {
        userNumber = getNumber('Загаданное число меньше, повторите ввод:');
        checkNumber(userNumber, hiddenNumber);
    } else if (userNumber < hiddenNumber) {
        userNumber = getNumber('Загаданное число больше, повторите ввод:');
        checkNumber(userNumber, hiddenNumber);
    } else {
        alert('Поздравляю! Вы угадали!');
        console.log(userNumber);
    }
}

let userNumber = getNumber('Введите число от 1 до 100:');
checkNumber(userNumber, getHiddenNumber());