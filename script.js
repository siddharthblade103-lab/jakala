const clock = document.getElementById("clock");
const altitude = document.getElementById("altitude");
const speed = document.getElementById("speed");
const vspeed = document.getElementById("vspeed");
const battery = document.getElementById("battery");

const modeButtons = document.querySelectorAll(".mode-btn");
modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modeButtons.forEach((node) => node.classList.remove("active"));
    btn.classList.add("active");
  });
});

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString("en-IN", {
    hour12: false,
  });
}

function randomizeTelemetry() {
  const baseAlt = 320;
  const baseSpeed = 64;
  const alt = baseAlt + Math.floor(Math.random() * 9 - 4);
  const spd = baseSpeed + Math.floor(Math.random() * 7 - 3);
  const vsp = (Math.random() * 1.2 - 0.6).toFixed(1);

  altitude.textContent = `${alt} m`;
  speed.textContent = `${Math.max(spd, 35)} km/h`;
  vspeed.textContent = `${vsp} m/s`;

  const currentBattery = Number.parseInt(battery.textContent, 10);
  if (!Number.isNaN(currentBattery) && currentBattery > 22 && Math.random() > 0.75) {
    battery.textContent = `${currentBattery - 1}%`;
  }
}

updateClock();
setInterval(updateClock, 1000);
setInterval(randomizeTelemetry, 2500);
