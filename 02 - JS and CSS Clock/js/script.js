const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function updateDate() {
  const clock = new Date();

  const hours = clock.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;

  const minutes = clock.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;

  const seconds = clock.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
}

setInterval(updateDate, 1000);
