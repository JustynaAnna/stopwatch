import { root } from "./colorsModule.js";

// Functions handling UI color changes.
export const setFirstColor = () => {
  // Setting the first interface color.
  root.style.setProperty("--first-color", "rgb(250, 20, 6)");
  root.style.setProperty("--hover-color", "rgb(209, 33, 24)");
};

export const setSecondColor = () => {
  root.style.setProperty("--first-color", "rgb(6, 173, 250)");
  root.style.setProperty("--hover-color", "rgb(28, 145, 199)");
};

export const setThirdColor = () => {
  root.style.setProperty("--first-color", "rgb(0, 255, 42)");
  root.style.setProperty("--hover-color", "rgb(28, 209, 58)");
};
