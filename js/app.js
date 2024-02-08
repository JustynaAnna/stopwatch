import {
  setFirstColor,
  setSecondColor,
  setThirdColor,
} from "./utils/colors.js";
import {
  colorBtn,
  colorOne,
  colorPanel,
  colorThree,
  colorTwo,
} from "./modules/colorsModule.js";
import {
  clearHistoryBtn,
  closeModalBtn,
  historyBtn,
  infoBtn,
  modalShadow,
  pauseBtn,
  resetBtn,
  startBtn,
  stopBtn,
} from "./modules/buttonsModule.js";

import {
  handleClearHistory,
  toggleHistoryVisibility,
} from "./modules/history.js";

import { showModal } from "./utils/modal.js";

import {
  handlePause,
  handleReset,
  handleStart,
  handleStop,
} from "./utils/stopwatch.js";

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);
resetBtn.addEventListener("click", handleReset);
historyBtn.addEventListener("click", toggleHistoryVisibility);
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

colorOne.addEventListener("click", setFirstColor);
colorTwo.addEventListener("click", setSecondColor);
colorThree.addEventListener("click", setThirdColor);
