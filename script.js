const clockImage = document.getElementById('clock');

function rotateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const totalDegrees = hours * 15 + minutes * 0.25 + seconds * 0.0041666666666667;
  clock.style.transform = `rotate(${0 - totalDegrees}deg)`;
}

setInterval(rotateClock, 10000);

rotateClock();

const parallaxInstance = new Parallax(document.querySelector('.container'));
const parallaxGyro = new Parallax(document.querySelector('.container'), {
  calibrateX: true,
  calibrateY: true,
});