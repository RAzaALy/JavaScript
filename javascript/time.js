console.log('Clock Applciation:');

function updateClock() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    currentHours = (currentHours > 12 ? currentHours - 12 : currentHours);
    currentHours = (currentHours == 0 ? 12 : currentHours);

    let timeOfDay = (currentHours < 12) ? "PM" : "AM";
    let currentTimeStr = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + timeOfDay;
    document.getElementById('clock').innerHTML = currentTimeStr;
}