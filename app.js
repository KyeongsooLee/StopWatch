const timeEl = document.querySelector(".time");
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

let timeMs = 0;
let intervalId;
let running = false;

function updateTime() {
  timeMs += 10;

  const hours = Math.floor((timeMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeMs / (1000 * 60)) % 60);
  const seconds = Math.floor((timeMs / 1000) % 60);

  const displayHours = hours < 10 ? "0" + hours : hours;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  timeEl.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function startStop() {
  if (!running) {
    intervalId = setInterval(updateTime, 10);
    startStopBtn.innerHTML = "Stop";
    running = true;
  } else {
    clearInterval(intervalId);
    startStopBtn.innerHTML = "Start";
    running = false;
  }
}

function reset() {
  clearInterval(intervalId);
  timeMs = 0;
  timeEl.innerHTML = "00:00:00";
  startStopBtn.innerHTML = "Start";
  running = false;
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
