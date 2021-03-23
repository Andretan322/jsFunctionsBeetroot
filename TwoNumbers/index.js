'use strict';

function getNumberFirst() {
    let askNumberOne = +prompt("Type the first number");
    let askNumberTwo = +prompt("Type the second number");

    if (askNumberOne > askNumberTwo) {
        alert(1);
    } else if (askNumberOne === askNumberTwo) {
        alert(0);
    } else {
        alert(-1);
    }
}

let getNumberSecond = function () {
    let askNumberOne = +prompt("Type the first number");
    let askNumberTwo = +prompt("Type the second number");

    if (askNumberOne > askNumberTwo) {
        alert(1);
    } else if (askNumberOne === askNumberTwo) {
        alert(0);
    } else {
        alert(-1);
    }
}

let getNumberThird = () => {
    let askNumberOne = +prompt("Type the first number");
    let askNumberTwo = +prompt("Type the second number");

    if (askNumberOne > askNumberTwo) {
        alert(1);
    } else if (askNumberOne === askNumberTwo) {
        alert(0);
    } else {
        alert(-1);
    }
}