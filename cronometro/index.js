const minutos = document.querySelector("#minutes")
const segundos = document.querySelector("#seconds")
const milisegundos = document.querySelector("#milliseconds")
const start = document.querySelector("#startBtn")
const pause = document.querySelector("#pauseBtn")
const continuar = document.querySelector("#continuar")
const resetar = document.querySelector("#resetar")

let minutes = 0
let seconds = 0
let miliseconsds = 0
let isPaused = false

start.addEventListener("click", startTimer)
pause.addEventListener("click", pauseTimer)
continuar.addEventListener("click", resumeTimer)
resetar.addEventListener("click", resetTimer)

function startTimer() {
  inteval = setInterval(() => {
    if (!isPaused) {
      miliseconsds += 10
      if (miliseconsds === 1000) {
        seconds++;
        miliseconsds = 0
      }
      if (seconds === 60) {
        minutes++
        seconds = 0
      }
      minutos.textContent = formatTime(minutes)
      segundos.textContent = formatTime(seconds)
      milisegundos.textContent = formatMilliseconsds(miliseconsds)
    }
  }, 10)
  start.style.display = "none"
  pause.style.display = "block"
}

function pauseTimer() {
  isPaused = true
  pause.style.display = "none"
  continuar.style.display = "block"
}

function resumeTimer() {
  isPaused = false;
  pause.style.display = "block"
  continuar.style.display = "none"
}

function resetTimer() {
  clearInterval(inteval);
  minutes = 0
  seconds = 0
  miliseconsds = 0

  minutos.textContent == "00"
  segundos.textContent == "00"
  milisegundos.textContent = "000"

  start.style.display = "block"
  pause.style.display = "none"
  continuar.style.display = "none"
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

function formatMilliseconsds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}