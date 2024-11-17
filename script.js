const clockImage = document.getElementById('clock');

function rotateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  console.log(hours);

  // Calculate total degrees for the current time (24-hour clock, 360° rotation)
  const totalDegrees = hours * 15 + minutes * 0.25;
  // console.log(totalDegrees);
  clock.style.transform = `rotate(${0-totalDegrees}deg)`;
}

setInterval(rotateClock, 60000);

rotateClock();