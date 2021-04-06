`use strict`;

const getTimeInSeconds = () => {
    const time = new Date();

    time.setHours(prompt(`Enter hours`));
    time.setMinutes(prompt(`Enter minutes`));
    time.setSeconds(prompt(`Enter seconds`));

    const returnTimeInSeconds = time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
    alert(returnTimeInSeconds);
}