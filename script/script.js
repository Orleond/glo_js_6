'use strict';

function inputNumber(a) {
    let number = prompt(a);

    function getNum(n) {
        if (n === null) {
            console.log('Игра окончена');
        } else if (isNaN(parseFloat(n))) {
            n = inputNumber('Введите число!');
        } else if (+n > 100 || +n < 1) {
            n = inputNumber('Загадай число от 1 до 100!');
        }
        return n;
    }
    return getNum(number);
}

function hiddenNumber() {

    function hidN(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return hidN(1, 100);
}

function test(a, num) {
    if (a > num) {
        a = inputNumber('Загаданное число меньше. Продолжай отгадывать');
        test(a, num);
    } else if (a < num) {
        a = inputNumber('Загаданное число больше. Продолжай отгадывать');
        test(a, num);
    } else {
        alert('Поздравляю! Вы выиграли!');
    }
}

function game() {
    console.clear();
    let num = hiddenNumber();
    let a = inputNumber('Загадай число от 1 до 100');
    test(a, num);

    // let rep = confirm('Сыграть ещё?');
    // if (rep === true) {
    //     game();
    // } else {
    //     console.log('Игра окончена');
    // }
}

game();