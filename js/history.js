import { clearHistoryBtn, timeList } from "./domElements.js";

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

export const toggleHistory = () => {
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
};
