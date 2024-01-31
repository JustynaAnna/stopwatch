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

const handleStart = () => {
  clearInterval(countTime); // Jesli kliknę ponownie na start to interwał nie zgupieje, a zacznie liczyc od nowa anulując poprzedni start.
  countTime = setInterval(() => {
    counter++;
    const minutes = Math.floor(counter / 60);
    const seconds = counter % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    stopwatch.textContent = formattedTime;
  }, 1000);
};

const handlePause = () => {
  clearInterval(countTime);
};
startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);

// const handleStart = () => {
//   clearInterval(countTime);
//   countTime = setInterval(() => {
//     if (seconds < 9) {
//       seconds++;
//       console.log(seconds);
//       stopwatch.textContent = `${minutes}:0${seconds}`;
//     } else if (seconds >= 9 && seconds < 59) {
//       seconds++;
//       console.log("else if" + seconds);
//       stopwatch.textContent = `${minutes}:${seconds}`;
//     } else {
//       minutes++;
//       console.log(minutes + "else");
//       seconds = 0;
//       stopwatch.textContent = `${minutes}:00`;
//     }
//   }, 1000);
// };
// startBtn.addEventListener("click", handleStart);
