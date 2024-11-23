const clockImage = document.getElementById('clock');
const background = document.querySelector('.background');

function rotateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const totalDegrees = hours * 15 + minutes * 0.25 + seconds * 0.0041666666666667;
  clock.style.transform = `rotate(${0 - totalDegrees}deg)`;

  // Update the background image based on time of day
  if (hours >= 6 && hours < 16) {
    background.style.backgroundImage = "url('assets/bg.png')";
  } else if(hours >= 16 && hours < 21) {
    background.style.backgroundImage = "url('assets/bg_evening.png')";
  } else if(hours >= 21 || hours < 6) {
    background.style.backgroundImage = "url('assets/bg_night.png')";
  }
}

setInterval(rotateClock, 10000);

rotateClock();

// Initialize Parallax
const parallaxInstance = new Parallax(document.querySelector('.container'));
const parallaxGyro = new Parallax(document.querySelector('.container'), {
  calibrateX: true,
  calibrateY: true,
});