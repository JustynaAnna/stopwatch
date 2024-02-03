const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");

const infoBtn = document.querySelector(".info");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");

let countTime;
let counter = 0;
let timesArray = [];

const handleStart = () => {
  clearInterval(countTime); // Jesli kliknę ponownie na start to interwał nie zgupieje, a zacznie liczyc od nowa anulując poprzedni start.
  countTime = setInterval(() => {
    counter++;
    updateStopwatch(counter);
  }, 1000);
};

const handlePause = () => {
  clearInterval(countTime);
};

const handleStop = () => {
  time.innerHTML = `previous time: ${stopwatch.textContent} `;

  if (stopwatch.textContent !== "0:00") {
    time.style.visibility = "visible";
    timesArray.push(stopwatch.textContent);
    console.log(timesArray);
  }
  clearTimerData();
};

const handleReset = () => {
  time.style.visibility = "hidden";
  timesArray = [];
  clearTimerData();
};
const updateStopwatch = (counter) => {
  const minutes = Math.floor(counter / 60);
  const seconds = counter % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  stopwatch.textContent = formattedTime;
};

const clearTimerData = () => {
  clearInterval(countTime);
  counter = 0;
  stopwatch.textContent = "0:00";
  timeList.textContent = "";
};

const showHistory = () => {
  timeList.textContent = "";

  timesArray.forEach((time, index) => {
    const newTime = document.createElement("li");
    newTime.innerHTML = `Measurement ${index + 1}:<span>${time}</span>`;

    console.log(newTime);
    timeList.appendChild(newTime);
  });
};

const showModal = () => {
  modalShadow.style.display =
    modalShadow.style.display === "block" ? "none" : "block";
  modalShadow.classList.toggle("modal-animations");
};

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);
resetBtn.addEventListener("click", handleReset);
historyBtn.addEventListener("click", showHistory);
infoBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", showModal);
window.addEventListener("click", (e) => {
  if (e.target === modalShadow) {
    showModal();
  }
});
