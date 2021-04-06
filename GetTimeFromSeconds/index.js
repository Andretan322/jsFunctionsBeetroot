`use strict`;

const getTimeFromSeconds = () => {
    const askTimeInSeconds = prompt(`Enter time in seconds`);
    const time = new Date(0, 0, 0, 0, 0, askTimeInSeconds);
    alert(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
}