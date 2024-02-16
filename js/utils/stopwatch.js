import {
  isHistoryVisible,
  showHistory,
  timesArray,
} from "../modules/history.js";
import { stopwatch, time } from "../modules/stopwatchModule.js";

let countTime;
let counter = 0;

// Function to format individual time components (hours, minutes, seconds) with leading zeros if needed.
const formatTimeComponent = (timeComponent) => {
  return String(timeComponent).padStart(2, "0");
};

// Function to format the time based on the counter value.
const formatTime = (counter) => {
  // Calculate hours, minutes, and seconds from the counter value.
  const hours = Math.floor(counter / 3600);
  const minutes = Math.floor((counter % 3600) / 60);
  const seconds = counter % 60;

  // Format each time component using the formatTimeComponent function.
  const formattedHours = formatTimeComponent(hours);
  const formattedMinutes = formatTimeComponent(minutes);
  const formattedSeconds = formatTimeComponent(seconds);

  // Return the formatted time string in the format hh:mm:ss.
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

// Function to update the stopwatch display with the formatted time.
const updateStopwatch = (counter) => {
  // Format the time based on the counter value.
  const formattedTime = formatTime(counter);
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
