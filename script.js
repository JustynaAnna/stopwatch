const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");
const clearHistoryBtn = document.querySelector(".clear-history");

const infoBtn = document.querySelector(".fa-question");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");

let countTime;
let counter = 0;
let timesArray = [];
let isHistoryVisible = false;

//colors
const colorBtn = document.querySelector(".fa-paint-brush");
const colorPanel = document.querySelector(".colors");
const colorOne = document.querySelector(".one");
const colorTwo = document.querySelector(".two");
const colorThree = document.querySelector(".three");
let root = document.documentElement;

const handleStart = () => {
  clearInterval(countTime); // Jesli kliknę ponownie na start to interwał nie zgupieje, a zacznie liczyc od nowa anulując poprzedni start.
  countTime = setInterval(() => {
    counter++;
    updateStopwatch(counter);
  }, 1000);
};

const handlePause = () => {
  if (countTime) {
    // Sprawdzam, czy stoper jest uruchomiony przed kliknieciem pauzy
    clearInterval(countTime);
    console.log(" im in pause!");
  }
};

const handleStop = () => {
  time.innerHTML = `previous time: ${stopwatch.textContent} `;

  if (stopwatch.textContent !== "00:00:00") {
    time.style.visibility = "visible";
    timesArray.push(stopwatch.textContent);
  }
  clearTimerData();
  if (isHistoryVisible) {
    showHistory();
  }
};

const handleReset = () => {
  time.style.visibility = "hidden";
  clearTimerData();
};

const handleClearHistory = () => {
  timeList.textContent = "";
  timesArray = []; //Ustawiam na pustą tablicę inaczej po uruchomieniu stopera i kliknieciu na historie dalej mam stare zapisy
  // clearHistoryBtn.style.display = "none"; PRZEMYSL TO
  clearHistoryBtn.style.display = "none";
};

const updateStopwatch = (counter) => {
  const hours = Math.floor(counter / 3600);
  const minutes = Math.floor((counter % 3600) / 60);
  const seconds = counter % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  stopwatch.textContent = formattedTime;
};

const clearTimerData = () => {
  clearInterval(countTime);
  counter = 0;
  stopwatch.textContent = "00:00:00";
  // timeList.textContent = "";
  countTime = null; //Jak kliknę start, póżniej stop, a później na pauze to przycisk nie zadziała bo warunek if (countTime)jest false
};

const showHistory = () => {
  timeList.textContent = "";
  clearHistoryBtn.style.display = "block";

  timesArray.forEach((time, index) => {
    const newTime = document.createElement("li");
    newTime.innerHTML = `#${index + 1}:<span>${time}</span>`;
    timeList.appendChild(newTime);
  });
};

const hideHistory = () => {
  timeList.textContent = "";
  clearHistoryBtn.style.display = "none";
};

const toggleHistory = () => {
  if (!isHistoryVisible) {
    showHistory();
    isHistoryVisible = true;
  } else {
    hideHistory();
    isHistoryVisible = false;
  }
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
historyBtn.addEventListener("click", toggleHistory);
clearHistoryBtn.addEventListener("click", handleClearHistory);
infoBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", showModal);
window.addEventListener("click", (e) => {
  if (e.target === modalShadow) {
    showModal();
  }
});

colorBtn.addEventListener("click", () => {
  colorPanel.classList.toggle("show-colors");
});

colorOne.addEventListener("click", () => {
  root.style.setProperty("--first-color", "rgb(250, 20, 6)");
  root.style.setProperty("--hover-color", "rgb(209, 33, 24)");
});
colorTwo.addEventListener("click", () => {
  root.style.setProperty("--first-color", "rgb(6, 173, 250)");
  root.style.setProperty("--hover-color", "rgb(28, 145, 199)");
});
colorThree.addEventListener("click", () => {
  root.style.setProperty("--first-color", "rgb(0, 255, 42)");
  root.style.setProperty("--hover-color", "rgb(28, 209, 58)");
});
