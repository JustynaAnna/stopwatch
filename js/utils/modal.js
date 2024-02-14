import { historyModalWarning, modalShadow } from "../modules/buttonsModule.js";

const test = (modal) => {
  modal.style.display = modal.style.display === "block" ? "none" : "block";
  modal.classList.toggle("modal-animations");
};

export const showModal = () => {
  test(modalShadow);
};

export const showWarningModal = () => {
  test(historyModalWarning);
};
