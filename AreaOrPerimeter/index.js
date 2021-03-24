'use strict';

let arr;

const getArea = () => alert(arr[0] * arr[1]);
const getPerimeter = () => alert(4 * arr[0]);

const askParam = () => {
    const arr = [];

    for (let i = 1; i <= 2; i++) {
        const askNumber = +prompt("Enter the length");

        if (askNumber != '') {
            arr.push(askNumber);
        } else continue;
    }
    return arr;
}

function checkArr() {
    arr = askParam();

    if (arr.length == 2) getArea();
    else getPerimeter();
}
