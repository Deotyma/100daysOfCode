 const secondHand = document.querySelector('.second-hand');
 const minsHand = document.querySelector('.min-hand');
 const hourHand = document.querySelector('.hour-hand');

 function setDate() {
     const now = new Date();
     const seconds = now.getSeconds();
     const secondsDegrees = ((seconds / 60) * 360) + 90;
     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
     const mins = now.getMinutes();
     const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
     minsHand.style.transform = `rotate(${minsDegrees}deg)`;
     const hour = now.getHours();
     const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
     hourHand.style.transform = `rotate(${hourDegrees}deg)`;
 }
 setInterval(setDate, 1000);
 setDate();

 const alarmSound = new Audio
 alarmSound.src = 'sounds/fantasia.wav';

 function setAlarm() {
     const ms = document.getElementById('timeAlarm').valueAsNumber;
     if (isNaN(ms)) {
         alert('La date est incorecte');
         return;
     }

     const alarm = new Date(ms);
     const alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
     const difference = alarmTime.getTime() - (new Date()).getTime();

     if (difference < 0) {
         alert('La date est incorecte. Choisi une autre date');

         return
     }
     setTimeout(initAlarm, difference);

 };

 function initAlarm() {
     alarmSound.play
 }