import UI from "./ui";
import { getData } from "./weatherData";
const searchInputKeyWord = document.querySelector(".city-search-input");

export default function initializeButtons() {
  const searchButton = document.querySelector(".search-button");
  const changeTempUnitButton = document.querySelector(
    ".change-temp-unit-button"
  );
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    getData(searchInputKeyWord.value);
  });
  changeTempUnitButton.addEventListener("click", () => {
    changeTempUnitButton.classList.toggle("temp-f");
    UI.changeWeatherUnit();
  });
}
