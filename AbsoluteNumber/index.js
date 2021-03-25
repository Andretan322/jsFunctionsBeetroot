'use strict';

function getNumber() {
    const askNumber = prompt("Type the number");
    return askNumber;
}

function getDiv(number) {
    const arr = [];

    for (let i = 2; i <= number; i++) {
        if (number % i) continue;
        else {
            let div = number / i;
            arr.push(div);
        }
    }
    return arr;
}

function getSum(number) {
    const arr = getDiv(number);
    const sumDigits = arr.reduce((a, b) => a + b);
    return sumDigits;
}

function getResult() {
    const number = getNumber();

    if (number == getSum(number)) {
        alert("It's the absolute number");
    } else {
        alert("It's not the absolute number");
    }
}