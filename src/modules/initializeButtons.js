import { getData } from "./weatherData";

const searchInputKeyWord = document.querySelector(".city-search-input");

export default function initializeButtons() {
  const searchButton = document.querySelector(".search-button");
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    getData(searchInputKeyWord.value);
  });
}
