import "../styles/main.css";
import UI from "./ui";

/* async function so that my WeatherAPI can fetch the data */

// fetch the  data from the Weather API //
export async function getData(location) {
  try {
    const data = await fetch(
      ` https://api.weatherapi.com/v1/forecast.json?key=c25c0f620d434f86841143300232209&q=${location}&days=6&aqi=no&alerts=no`,
      { mode: "cors" }
    );
    const result = await data.json();

    if (location == "")
      throw new Error(
        "Search input field, can't be empty! Please insert the name of the city."
      );
    else if (!data.ok) {
      throw new Error(`Sorry, ${location} is not a valid city!`);
    }

    UI.appendWeatherInformation(
      result.location.name,
      result.current.temp_c,
      result.current.temp_f,
      result.forecast.forecastday[0].day.mintemp_c,
      result.forecast.forecastday[0].day.maxtemp_c,
      result.forecast.forecastday[0].day.mintemp_f,
      result.forecast.forecastday[0].day.maxtemp_f,
      result.current.feelslike_c,
      result.current.feelslike_f,
      result.current.humidity,
      result.current.condition.text,
      result.current.is_day
    );
    UI.appendWeatherConditionData(
      UI.getWeatherImageContainer(),
      result.current.condition.text,
      result.current.is_day
    );
    UI.appendForecast(result.forecast.forecastday);
    return result;
  } catch (error) {
    alert(error, "");
    return null;
  }
}
