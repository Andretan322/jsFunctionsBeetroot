`use strict`;

const getTime = () => {
    const time = new Date();

    time.setHours(prompt(`Enter hours`));
    time.setMinutes(prompt(`Enter minutes`));
    time.setSeconds(prompt(`Enter seconds`));

    const returnTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    alert(returnTime);
}