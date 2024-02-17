import { showWarningModal } from "../utils/modal.js";
import { clearHistoryBtn } from "./domElementsModule.js";
import { timeList } from "./stopwatchModule.js";

export let timesArray = [];
export let isHistoryVisible = false;

export const showHistory = () => {
  timeList.textContent = "";
  clearHistoryBtn.style.display = "block";

  timesArray.forEach((time, index) => {
    const newTime = document.createElement("li");
    newTime.innerHTML = `#${index + 1}:<span>${time}</span>`;
    timeList.appendChild(newTime);
  });
};

export const hideHistory = () => {
  timeList.textContent = "";
  clearHistoryBtn.style.display = "none";
};

// Toggles the visibility of the time measurement history.
export const toggleHistoryVisibility = () => {
  if (!isHistoryVisible) {
    showHistory();
    isHistoryVisible = true;
  } else {
    hideHistory();
    isHistoryVisible = false;
  }
};

export const handleClearHistory = () => {
  timeList.textContent = "";
  timesArray = []; //Ustawiam na pustą tablicę inaczej po uruchomieniu stopera i kliknieciu na historie dalej mam stare zapisy
  // clearHistoryBtn.style.display = "none"; PRZEMYSL TO
  clearHistoryBtn.style.display = "none";
  showWarningModal();
};
