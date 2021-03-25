'use strict';

function getRange() {
    let arrRange = [];

    for (let i = 0; i < 2; i++) {
        let askRange = +prompt("Type the range\nFrom:\nTo:");
        arrRange.push(askRange);
    }

    return arrRange;
}

function getDividers(range) {
    let arrDivs = [];
    let arrAbsoluteNumbers = [];
    let arrResult;

    if (range.length == 2) {
        for (range[0]; range[0] <= range[1]; range[0]++) {
            for (let i = 2; i <= range[0]; i++) {
                if (range[0] % i) continue;
                else {
                    let div = range[0] / i;
                    arrDivs.push(div);
                }
            }
            let sumDivs = arrDivs.reduce((a, b) => a + b);
            arrResult = getAbsoluteNumbers(range[0], sumDivs, arrAbsoluteNumbers);
            arrDivs = [];
        }
    }
    return(arrResult);
}

function getAbsoluteNumbers(range, sumDivs, arrAbsoluteNumbers) {
    if (range == sumDivs) arrAbsoluteNumbers.push(range);
    return (arrAbsoluteNumbers);
}

function getNumbers() {
    const range = getRange();
    const dividers = getDividers(range);
    alert(dividers);
}