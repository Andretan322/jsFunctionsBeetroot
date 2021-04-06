`use strict`;

const getTime = () => {
    const time = new Date();

    const hours = time.setHours(prompt(`Enter hours`));
    const minutes = time.setMinutes(prompt(`Enter minutes`));
    const seconds = time.setSeconds(prompt(`Enter seconds`));

    const returnTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    alert(returnTime);
}