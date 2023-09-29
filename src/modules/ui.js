import initializeButtons from "./initializeButtons";
import notFoundIcon from "../assets/not-available.svg";
import clearSunnyDayIcon from "../assets/clear-day.svg";
import clearNightDayIcon from "../assets/clear-night.svg";
import cloudyIcon from "../assets/cloudy.svg";
import rainIcon from "../assets/rain.svg";
import rainPartlyCloudyDay from "../assets/partly-cloudy-day-rain.svg";
import rainPartlyCloudyNight from "../assets/partly-cloudy-night-rain.svg";
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
  }

  // render weather information on the screen //
  static appendWeatherInformation(location, temperature, condition, isDay) {
    this.clearContentContainer();
    const locationName = document.createElement("h3");
    const temperaturePara = document.createElement("p");
    const imageElement = document.createElement("img");

    locationName.textContent = location;
    temperaturePara.textContent = Math.floor(temperature);
    this.getContentContainer().appendChild(locationName);
    this.getContentContainer().appendChild(temperaturePara);

    // based on weather condition different animated icons will be rendered on the screen //

    switch (true) {
      case (condition === "Clear" || condition === "Sunny") && isDay === 1:
        imageElement.src = clearSunnyDayIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case (condition === "Clear" || condition === "Sunny") && isDay === 0:
        imageElement.src = clearNightDayIcon;
        this.getContentContainer().appendChild(imageElement);
        break;
      case condition === "Cloudy":
        imageElement.src = cloudyIcon;
        this.getContentContainer().appendChild(imageElement);
        break;
      case condition === "Light rain" ||
        condition === "Moderate rain" ||
        condition === "Heavy rain":
        imageElement.src = rainIcon;
        this.getContentContainer().appendChild(imageElement);
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
        this.getContentContainer().appendChild(imageElement);
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
        this.getContentContainer().appendChild(imageElement);
        break;

      case condition === "Light freezing rain" ||
        condition === "Moderate or heavy freezing rain" ||
        condition === "Light sleet" ||
        condition === "Moderate or heavy sleet":
        imageElement.src = sleetIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case (condition === "Light sleet showers" ||
        condition === "Moderate or heavy sleet showers") &&
        isDay === 1:
        imageElement.src = sleetPartlyCloudyDayIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case (condition === "Light sleet showers" ||
        condition === "Moderate or heavy sleet showers") &&
        isDay === 0:
        imageElement.src = sleetPartlyCloudyNightIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case (condition === "Fog" || condition === "Freezing fog") && isDay === 1:
        imageElement.src = fogDayIcon;
        this.getContentContainer().appendChild(imageElement);
        break;
      case (condition === "Fog" || condition === "Freezing fog") && isDay === 0:
        imageElement.src = fogNightIcon;
        break;
      case condition === "Overcast" && isDay === 1:
        imageElement.src = overcastDayIcon;
        this.getContentContainer().appendChild(imageElement);
        break;
      case condition === "Overcast" && isDay === 0:
        imageElement.src = overcastNightIcon;
        this.getContentContainer().appendChild(imageElement);
        break;
      case condition === "Partly cloudy" && isDay === 1:
        imageElement.src = partlyCloudyDayIcon;
        this.getContentContainer().appendChild(imageElement);
        break;
      case condition === "Partly cloudy" && isDay === 0:
        imageElement.src = partlyCloudyNightIcon;
        this.getContentContainer().appendChild(imageElement);
        break;
      case condition === "Light snow" ||
        condition === "Heavy snow" ||
        condition === "Moderate snow" ||
        condition === "Blizzard" ||
        condition === "Blowing snow":
        imageElement.src = snowIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case (condition === "Patchy snow possible" ||
        condition === "Patchy light snow" ||
        condition === "Patchy moderate snow" ||
        condition === "Patchy heavy snow " ||
        condition === "Light snow showers" ||
        condition === "Moderate or heavy snow showers ") &&
        isDay === 1:
        imageElement.src = partlyCloudySnowDayIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case (condition === "Patchy snow possible" ||
        condition === "Patchy light snow" ||
        condition === "Patchy moderate snow" ||
        condition === "Patchy heavy snow " ||
        condition === "Light snow showers" ||
        condition === "Moderate or heavy snow showers ") &&
        isDay === 0:
        imageElement.src = partlyCloudySnowNightIcon;
        this.getContentContainer().appendChild(imageElement);
        break;
      case condition === "Ice pellets" ||
        condition === "Light showers of ice pellets":
        imageElement.src = hailIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case condition === "Moderate or heavy showers of ice pellets" &&
        isDay === 1:
        imageElement.src = hailPartlyCloudyDayIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case condition === "Moderate or heavy showers of ice pellets" &&
        isDay === 0:
        imageElement.src = hailPartlyCloudyNightIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case (condition === "Patchy light rain with thunder" ||
        condition === "Moderate or heavy rain with thunder") &&
        isDay === 1:
        imageElement.src = thunderstormRainDayIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case (condition === "Patchy light rain with thunder" ||
        condition === "Moderate or heavy rain with thunder") &&
        isDay === 0:
        imageElement.src = thunderstormRainNightIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case condition === "Thundery outbreaks possible" && isDay === 1:
        imageElement.src = thunderstormDayIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case condition === "Thundery outbreaks possible" && isDay === 0:
        imageElement.src = thunderstormNightIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case (condition === "Patchy light snow with thunder" ||
        condition === "Moderate or heavy snow with thunder") &&
        isDay === 1:
        imageElement.src = thunderstormSnowDayIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      case (condition === "Patchy light snow with thunder" ||
        condition === "Moderate or heavy snow with thunder") &&
        isDay === 0:
        imageElement.src = thunderstormSnowNightIcon;
        this.getContentContainer().appendChild(imageElement);
        break;

      default:
        imageElement.src = notFoundIcon;
        this.getContentContainer().appendChild(imageElement);
        break;
    }
  }

  //clear content of forecast container //
  static clearContentContainer() {
    this.getContentContainer().textContent = "";
  }

  // get content container //
  static getContentContainer() {
    return document.querySelector(".content-container");
  }
}
