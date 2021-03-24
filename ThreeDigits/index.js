'use strict';

function askNumbers() {

    let arrNumbers = [];

    for (let i = 1; i <= 3; i++) {
        const askNumber = prompt("Type the number");
        arrNumbers.push[askNumber];
    }

    return arrNumbers;
}

function getNumber() {
    askNumbers();
    alert(arrNumbers.reduce((a, b) => a + b));
}