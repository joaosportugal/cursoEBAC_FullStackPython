const dataDoAniversario = new Date('Sep 11, 2023 18:00:00');
const timeStampDoAniversario = dataDoAniversario.getTime();

const timer = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const untilEvent = timeStampDoAniversario - timeStampNow;

    const daysInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;

    const daysUntilEvent = Math.floor(untilEvent / daysInMs);
    const hoursUntilEvent = Math.floor((untilEvent % daysInMs) / hoursInMs);
    const minutesUntilEvent = Math.floor((untilEvent % hoursInMs )/ minutesInMs);
    const secondsUntilEvent = Math.floor(untilEvent % minutesInMs / 1000);
    
    const timerDisplay = document.getElementById('timer');
    timerDisplay.innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`

    if (untilEvent < 0) {
        clearInterval(timer);
        timerDisplay.innerHTML = "O evento já começou!"
    }
}, 1000)