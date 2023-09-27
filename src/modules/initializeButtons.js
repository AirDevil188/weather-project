import { getData, searchInputKeyWord } from "./weatherData";

export default function initializeButtons() {
  const searchButton = document.querySelector(".search-button");
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    getData(searchInputKeyWord.value);
  });
}
