import { modalShadow } from "./domElements.js";

export const showModal = () => {
  modalShadow.style.display =
    modalShadow.style.display === "block" ? "none" : "block";
  modalShadow.classList.toggle("modal-animations");
};
