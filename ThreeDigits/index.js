'use strict';

function askNumbers() {

    let arrNumbers = [];

    for (let i = 1; i <= 3; i++) {
        const askNumber = prompt("Type the number");
        if (askNumber != "") {
            arrNumbers.push(askNumber);
        } else continue;
    }

    return arrNumbers;
}

function getNumber() {
    const arr = askNumbers();
    alert(arr.reduce((a, b) => a + b));
}