import './styles/main.css'
const searchButton = document.querySelector(".search-button");
const searchInputKeyWord = document.querySelector(".city-search-input");


/* async function so that my WeatherAPI can fetch the data */

async function getData(location) {
    try {
    const data = await fetch(` http://api.weatherapi.com/v1/forecast.json?key=c25c0f620d434f86841143300232209&q=${location}&days=6&aqi=no&alerts=no`, {mode: 'cors'});
    const result = await data.json();

    
   
  if (location == "") throw new Error("Search input field, can't be empty! Please insert the name of the city.")
  else if (!data.ok) {
    throw new Error( `Sorry, ${location} is not a valid city!`)
}
    console.log(result)
    return result
    } catch (error) {
        alert(error)
        return null

    }
}

searchButton.addEventListener("click", (e) => {
    e.preventDefault()
    getData(searchInputKeyWord.value);

})
