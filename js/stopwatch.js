import { stopwatch, time } from "./domElements.js";
import { isHistoryVisible, showHistory, timesArray } from "./history.js";

let countTime;
let counter = 0;

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

export const handleStart = () => {
  clearInterval(countTime); // Jesli kliknę ponownie na start to interwał nie zgupieje, a zacznie liczyc od nowa anulując poprzedni start.
  countTime = setInterval(() => {
    counter++;
    updateStopwatch(counter);
  }, 1000);
};

export const handlePause = () => {
  if (countTime) {
    // Sprawdzam, czy stoper jest uruchomiony przed kliknieciem pauzy
    clearInterval(countTime);
    console.log(" im in pause!");
  }
};

export const handleStop = () => {
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

export const handleReset = () => {
  time.style.visibility = "hidden";
  clearTimerData();
};
