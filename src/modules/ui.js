import { getData } from "./weatherData";
import initializeButtons from "./initializeButtons";

/* importing weather icons */
import notFoundIcon from "../assets/not-available.svg";
import clearSunnyDayIcon from "../assets/clear-day.svg";
import clearNightDayIcon from "../assets/clear-night.svg";
import cloudyIcon from "../assets/cloudy.svg";
import rainIcon from "../assets/rain.svg";
import rainPartlyCloudyDay from "../assets/partly-cloudy-day-rain.svg";
import rainPartlyCloudyNight from "../assets/partly-cloudy-night-rain.svg";
import drizzlePartlyDrizzleDay from "../assets/partly-cloudy-day-drizzle.svg";
import drizzlePartlyDrizzleNight from "../assets/partly-cloudy-night-drizzle.svg";
import fogDayIcon from "../assets/fog-day.svg";
import fogNightIcon from "../assets/fog-night.svg";
import snowIcon from "../assets/snow.svg";
import partlyCloudySnowDayIcon from "../assets/partly-cloudy-day-snow.svg";
import partlyCloudySnowNightIcon from "../assets/partly-cloudy-day-snow.svg";
import hailIcon from "../assets/hail.svg";
import hailPartlyCloudyDayIcon from "../assets/partly-cloudy-day-hail.svg";
import hailPartlyCloudyNightIcon from "../assets/partly-cloudy-night-hail.svg";
import sleetIcon from "../assets/sleet.svg";
import sleetPartlyCloudyDayIcon from "../assets/partly-cloudy-day-sleet.svg";
import sleetPartlyCloudyNightIcon from "../assets/partly-cloudy-night-sleet.svg";
import overcastDayIcon from "../assets/overcast-day.svg";
import overcastNightIcon from "../assets/overcast-night.svg";
import partlyCloudyDayIcon from "../assets/partly-cloudy-day.svg";
import partlyCloudyNightIcon from "../assets/partly-cloudy-night.svg";
import thunderstormDayIcon from "../assets/thunderstorms-day.svg";
import thunderstormNightIcon from "../assets/thunderstorms-night.svg";
import thunderstormRainDayIcon from "../assets/thunderstorms-day-rain.svg";
import thunderstormRainNightIcon from "../assets/thunderstorms-night-rain.svg";
import thunderstormSnowDayIcon from "../assets/thunderstorms-day-snow.svg";
import thunderstormSnowNightIcon from "../assets/thunderstorms-night-snow.svg";

// load the home page //
export default class UI {
  static loadHome() {
    initializeButtons();
    getData("London");
  }

  // render weather information on the screen //
  static appendWeatherInformation(
    location,
    temperatureC,
    temperatureF,
    tempCMin,
    tempCMax,
    tempFMin,
    tempFMax,
    feelsLikeC,
    feelsLikeF,
    humidity,
    condition
  ) {
    this.clearContentContainer();

    const weatherContainer = document.createElement("div");
    const locationInformationContainer = document.createElement("div");
    const locationName = document.createElement("h3");
    const weatherConditionContainer = document.createElement("div");
    const weatherConditionPara = document.createElement("p");
    const weatherInformationContainer = document.createElement("div");
    const weatherImageContainer = document.createElement("div");
    const additionalInformationContainer = document.createElement("div");
    const changeTempUnitButton = document.querySelector(
      ".change-temp-unit-button"
    );

    weatherContainer.classList.add("weather-container");

    weatherInformationContainer.classList.add("weather-information-container");
    weatherImageContainer.classList.add("weather-image-container");
    locationInformationContainer.classList.add(
      "location-information-container"
    );
    weatherConditionPara.classList.add("weather-condition");
    weatherConditionContainer.classList.add("weather-condition-container");
    additionalInformationContainer.classList.add("additional-info-container");

    const tempPara = document.createElement("p");
    const minMaxTempPara = document.createElement("p");
    const humidityPara = document.createElement("p");

    tempPara.classList.add("current-temp");
    minMaxTempPara.classList.add("min-max-temp");
    humidityPara.classList.add("humidity");

    locationName.textContent = location;
    weatherConditionPara.textContent = condition;

    humidityPara.textContent = humidity;

    this.getContentContainer().appendChild(weatherContainer);
    weatherContainer.appendChild(locationInformationContainer);
    locationInformationContainer.appendChild(locationName);
    weatherContainer.appendChild(weatherInformationContainer);
    weatherInformationContainer.appendChild(weatherImageContainer);
    weatherContainer.appendChild(additionalInformationContainer);

    weatherInformationContainer.appendChild(weatherConditionContainer);
    weatherConditionContainer.appendChild(weatherConditionPara);
    additionalInformationContainer.appendChild(minMaxTempPara);
    additionalInformationContainer.appendChild(humidityPara);

    if (!changeTempUnitButton.classList.contains("temp-f")) {
      tempPara.textContent = Math.floor(temperatureC) + "°C ";
      minMaxTempPara.textContent =
        Math.floor(tempCMin) +
        "°C / " +
        Math.floor(tempCMax) +
        "°C " +
        "Feels Like " +
        Math.floor(feelsLikeC) +
        "°C ";
    } else {
      tempPara.textContent = Math.floor(temperatureF) + "°F ";
      minMaxTempPara.textContent =
        Math.floor(tempFMin) +
        "°F / " +
        Math.floor(tempFMax) +
        "°F " +
        "Feels Like " +
        Math.floor(feelsLikeF) +
        "°F ";
    }
    weatherImageContainer.appendChild(tempPara);
  }

  static appendForecast(forecastObject) {
    const changeTempUnitButton = document.querySelector(
      ".change-temp-unit-button"
    );
    this.clearForecastContainer();
    const forecastTableContainer = document.createElement("div");

    let threeDayArray = forecastObject.slice(1, 4);
    forecastTableContainer.classList.add("table-container");

    this.getForecastContainer().appendChild(forecastTableContainer);

    forecastTableContainer.appendChild(this.createTable(3, 5));

    for (let i = 0; i < this.getAlHeadCells().length; i++) {
      this.getAlHeadCells()[0].textContent = "Date";
      this.getAlHeadCells()[1].textContent = "Min/Max Temperature";
      this.getAlHeadCells()[2].textContent = "Icon";
      this.getAlHeadCells()[3].textContent = "Weather Condition";
      this.getAlHeadCells()[4].textContent = "Sunrise/Sunset Time";

      this.getAlHeadCells()[2].classList.add("table-header-icon");
    }

    for (let i = 0; i < this.getAllDataCells().length; i++) {
      this.getAllDataCells()[0].textContent = threeDayArray[0].date;
      this.getAllDataCells()[3].textContent =
        threeDayArray[0].day.condition.text;
      this.getAllDataCells()[4].textContent =
        threeDayArray[0].astro.sunrise + " / " + threeDayArray[0].astro.sunset;

      this.getAllDataCells()[5].textContent = threeDayArray[1].date;
      this.getAllDataCells()[8].textContent =
        threeDayArray[1].day.condition.text;
      this.getAllDataCells()[9].textContent =
        threeDayArray[1].astro.sunrise + " / " + threeDayArray[1].astro.sunset;

      this.getAllDataCells()[10].textContent = threeDayArray[2].date;
      this.getAllDataCells()[13].textContent =
        threeDayArray[2].day.condition.text;
      this.getAllDataCells()[14].textContent =
        threeDayArray[2].astro.sunrise + " / " + threeDayArray[2].astro.sunset;
    }

    this.appendWeatherConditionData(
      this.getAllDataCells()[2],
      threeDayArray[0].day.condition.text,
      1
    );
    this.appendWeatherConditionData(
      this.getAllDataCells()[7],
      threeDayArray[1].day.condition.text,
      1
    );
    this.appendWeatherConditionData(
      this.getAllDataCells()[12],
      threeDayArray[2].day.condition.text,
      1
    );

    if (!changeTempUnitButton.classList.contains("temp-f")) {
      this.getAllDataCells()[1].textContent =
        Math.floor(threeDayArray[0].day.mintemp_c) +
        "°C" +
        " / " +
        Math.floor(threeDayArray[0].day.maxtemp_c) +
        "°C";
      this.getAllDataCells()[6].textContent =
        Math.floor(threeDayArray[1].day.mintemp_c) +
        "°C" +
        " / " +
        Math.floor(threeDayArray[1].day.maxtemp_c) +
        "°C";
      this.getAllDataCells()[11].textContent =
        Math.floor(threeDayArray[2].day.mintemp_c) +
        "°C" +
        " / " +
        Math.floor(threeDayArray[2].day.maxtemp_c) +
        "°C";
    } else {
      this.getAllDataCells()[1].textContent =
        Math.floor(threeDayArray[0].day.mintemp_f) +
        "°F" +
        " / " +
        Math.floor(threeDayArray[0].day.maxtemp_f) +
        "°F";
      this.getAllDataCells()[6].textContent =
        Math.floor(threeDayArray[1].day.mintemp_f) +
        "°F" +
        " / " +
        Math.floor(threeDayArray[1].day.maxtemp_f) +
        "°F";
      this.getAllDataCells()[11].textContent =
        Math.floor(threeDayArray[2].day.mintemp_f) +
        "°F" +
        " / " +
        Math.floor(threeDayArray[2].day.maxtemp_f) +
        "°F";
    }

    this.getAllDataCells()[2].classList.add("data-icon");
    this.getAllDataCells()[7].classList.add("data-icon");
    this.getAllDataCells()[12].classList.add("data-icon");
  }

  static createTable(tr, td) {
    const forecastTable = document.createElement("table");
    const tableHeader = document.createElement("thead");
    const tableBody = document.createElement("tbody");
    const tableRow = document.createElement("tr");

    forecastTable.appendChild(tableHeader);
    tableHeader.appendChild(tableRow);
    for (let k = 0; k < td; k++) {
      const tableHead = document.createElement("th");
      tableRow.appendChild(tableHead);
    }

    forecastTable.appendChild(tableBody);
    for (let j = 0; j < tr; j++) {
      const tableRowForecast = document.createElement("tr");

      tableBody.appendChild(tableRowForecast);
      for (let i = 0; i < td; i++) {
        const tableDataForecast = document.createElement("td");
        tableRowForecast.appendChild(tableDataForecast);
      }
    }

    return forecastTable;
  }

  static appendWeatherConditionData(element, condition, isDay) {
    const imageElement = document.createElement("img");

    switch (true) {
      case (condition === "Clear" || condition === "Sunny") && isDay === 1:
        imageElement.src = clearSunnyDayIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case (condition === "Clear" || condition === "Sunny") && isDay === 0:
        imageElement.src = clearNightDayIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;
      case condition === "Cloudy":
        imageElement.src = cloudyIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;
      case condition === "Light rain" ||
        condition === "Moderate rain" ||
        condition === "Heavy rain":
        imageElement.src = rainIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;
      case (condition === "Patchy light rain" ||
        condition === "Moderate rain at times" ||
        condition === "Heavy rain at times" ||
        condition === "Light rain shower" ||
        condition === "Moderate or heavy rain shower" ||
        condition === "Torrential rain shower" ||
        condition === "Patchy rain possible") &&
        isDay === 1:
        imageElement.src = rainPartlyCloudyDay;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case (condition === "Patchy light rain" ||
        condition === "Moderate rain at times" ||
        condition === "Heavy rain at times" ||
        condition === "Light rain shower" ||
        condition === "Moderate or heavy rain shower" ||
        condition === "Torrential rain shower" ||
        condition === "Patchy rain possible") &&
        isDay === 0:
        imageElement.src = rainPartlyCloudyNight;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case condition === "Light freezing rain" ||
        condition === "Moderate or heavy freezing rain" ||
        condition === "Light sleet" ||
        condition === "Moderate or heavy sleet":
        imageElement.src = sleetIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case (condition === "Light sleet showers" ||
        condition === "Moderate or heavy sleet showers") &&
        isDay === 1:
        imageElement.src = sleetPartlyCloudyDayIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case (condition === "Light sleet showers" ||
        condition === "Moderate or heavy sleet showers") &&
        isDay === 0:
        imageElement.src = sleetPartlyCloudyNightIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case (condition === "Fog" ||
        condition === "Freezing fog" ||
        condition === "Mist") &&
        isDay === 1:
        imageElement.src = fogDayIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;
      case (condition === "Fog" ||
        condition === "Freezing fog" ||
        condition === "Mist") &&
        isDay === 0:
        imageElement.src = fogNightIcon;
        break;
      case condition === "Overcast" && isDay === 1:
        imageElement.src = overcastDayIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;
      case condition === "Overcast" && isDay === 0:
        imageElement.src = overcastNightIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;
      case condition === "Partly cloudy" && isDay === 1:
        imageElement.src = partlyCloudyDayIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;
      case condition === "Partly cloudy" && isDay === 0:
        imageElement.src = partlyCloudyNightIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;
      case condition === "Light snow" ||
        condition === "Heavy snow" ||
        condition === "Moderate snow" ||
        condition === "Blizzard" ||
        condition === "Blowing snow":
        imageElement.src = snowIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case condition.includes("drizzle") && isDay === 1:
        imageElement.src = drizzlePartlyDrizzleDay;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case condition.includes("drizzle") && isDay === 0:
        imageElement.src = drizzlePartlyDrizzleNight;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case (condition === "Patchy snow possible" ||
        condition === "Patchy light snow" ||
        condition === "Patchy moderate snow" ||
        condition === "Patchy heavy snow " ||
        condition === "Light snow showers" ||
        condition === "Moderate or heavy snow showers ") &&
        isDay === 1:
        imageElement.src = partlyCloudySnowDayIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case (condition === "Patchy snow possible" ||
        condition === "Patchy light snow" ||
        condition === "Patchy moderate snow" ||
        condition === "Patchy heavy snow " ||
        condition === "Light snow showers" ||
        condition === "Moderate or heavy snow showers ") &&
        isDay === 0:
        imageElement.src = partlyCloudySnowNightIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;
      case condition === "Ice pellets" ||
        condition === "Light showers of ice pellets":
        imageElement.src = hailIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case condition === "Moderate or heavy showers of ice pellets" &&
        isDay === 1:
        imageElement.src = hailPartlyCloudyDayIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case condition === "Moderate or heavy showers of ice pellets" &&
        isDay === 0:
        imageElement.src = hailPartlyCloudyNightIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case (condition === "Patchy light rain with thunder" ||
        condition === "Moderate or heavy rain with thunder") &&
        isDay === 1:
        imageElement.src = thunderstormRainDayIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case (condition === "Patchy light rain with thunder" ||
        condition === "Moderate or heavy rain with thunder") &&
        isDay === 0:
        imageElement.src = thunderstormRainNightIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case condition === "Thundery outbreaks possible" && isDay === 1:
        imageElement.src = thunderstormDayIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case condition === "Thundery outbreaks possible" && isDay === 0:
        imageElement.src = thunderstormNightIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case (condition === "Patchy light snow with thunder" ||
        condition === "Moderate or heavy snow with thunder") &&
        isDay === 1:
        imageElement.src = thunderstormSnowDayIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      case (condition === "Patchy light snow with thunder" ||
        condition === "Moderate or heavy snow with thunder") &&
        isDay === 0:
        imageElement.src = thunderstormSnowNightIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;

      default:
        imageElement.src = notFoundIcon;
        element.insertAdjacentElement("afterbegin", imageElement);
        break;
    }
  }

  /* fetch the date again so that we can display F or C units on the screen */

  static changeWeatherUnit() {
    const changeTempUnitButton = document.querySelector(
      ".change-temp-unit-button"
    );
    const h3TitleLocation = document.querySelector("h3").innerText;
    if (!changeTempUnitButton.classList.contains("temp-f")) {
      changeTempUnitButton.textContent = "Change to °F";
    } else changeTempUnitButton.textContent = "Change to °C";
    getData(h3TitleLocation);
  }

  //clear content of forecast container //
  static clearContentContainer() {
    this.getContentContainer().textContent = "";
  }

  static clearForecastContainer() {
    this.getForecastContainer().textContent = "";
  }

  static getMainContainer() {
    return document.querySelector(".main-container");
  }

  // get content container //
  static getContentContainer() {
    return document.querySelector(".content-container");
  }

  static getIconContainer() {
    return document.querySelector(".icon-container");
  }

  static getTemperatureContainer() {
    return document.querySelector(".location-temperature");
  }

  static getWeatherImageContainer() {
    return document.querySelector(".weather-image-container");
  }

  static getAllDataCells() {
    return document.querySelectorAll("td");
  }

  static getAlHeadCells() {
    return document.querySelectorAll("th");
  }

  static getForecastContainer() {
    return document.querySelector(".forecast-container");
  }
}
