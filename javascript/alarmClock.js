let alarmBtn = document.getElementById('alarmBtn');
//add event listener on Set Alarm Button:
alarmBtn.addEventListener('click', setAlarm);

//Functions To Play alarm tone:
function ringBell() {
    var audio = new Audio('bell.ogg');
    audio.play();
}
//SetAlarm 
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    let alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm.... for ${alarmDate}`);
    let now = new Date();
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            console.log('Ringing Now');
            ringBell();
        }, timeToAlarm);
    }
    else{
        console.log("Please input valid time");
    }
}