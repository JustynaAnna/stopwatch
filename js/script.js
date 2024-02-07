import { handleColorOne, handleColorThree, handleColorTwo } from "./colors.js";
import {
  clearHistoryBtn,
  closeModalBtn,
  colorBtn,
  colorOne,
  colorPanel,
  colorThree,
  colorTwo,
  historyBtn,
  infoBtn,
  modalShadow,
  pauseBtn,
  resetBtn,
  startBtn,
  stopBtn,
} from "./domElements.js";
import { handleClearHistory, toggleHistory } from "./history.js";
import { showModal } from "./modal.js";
import {
  handlePause,
  handleReset,
  handleStart,
  handleStop,
} from "./stopwatch.js";

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

colorOne.addEventListener("click", handleColorOne);
colorTwo.addEventListener("click", handleColorTwo);
colorThree.addEventListener("click", handleColorThree);
