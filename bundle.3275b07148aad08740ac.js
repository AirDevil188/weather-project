/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/initializeButtons.js":
/*!******************************************!*\
  !*** ./src/modules/initializeButtons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializeButtons)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherData */ "./src/modules/weatherData.js");


var searchInputKeyWord = document.querySelector(".city-search-input");
function initializeButtons() {
  var searchButton = document.querySelector(".search-button");
  var changeTempUnitButton = document.querySelector(".change-temp-unit-button");
  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    (0,_weatherData__WEBPACK_IMPORTED_MODULE_1__.getData)(searchInputKeyWord.value);
  });
  changeTempUnitButton.addEventListener("click", function () {
    changeTempUnitButton.classList.toggle("temp-f");
    _ui__WEBPACK_IMPORTED_MODULE_0__["default"].changeWeatherUnit();
  });
}

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ "./src/modules/weatherData.js");
/* harmony import */ var _initializeButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initializeButtons */ "./src/modules/initializeButtons.js");
/* harmony import */ var _assets_not_available_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/not-available.svg */ "./src/assets/not-available.svg");
/* harmony import */ var _assets_clear_day_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/clear-day.svg */ "./src/assets/clear-day.svg");
/* harmony import */ var _assets_clear_night_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/clear-night.svg */ "./src/assets/clear-night.svg");
/* harmony import */ var _assets_cloudy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/cloudy.svg */ "./src/assets/cloudy.svg");
/* harmony import */ var _assets_rain_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/rain.svg */ "./src/assets/rain.svg");
/* harmony import */ var _assets_partly_cloudy_day_rain_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/partly-cloudy-day-rain.svg */ "./src/assets/partly-cloudy-day-rain.svg");
/* harmony import */ var _assets_partly_cloudy_night_rain_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/partly-cloudy-night-rain.svg */ "./src/assets/partly-cloudy-night-rain.svg");
/* harmony import */ var _assets_partly_cloudy_day_drizzle_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/partly-cloudy-day-drizzle.svg */ "./src/assets/partly-cloudy-day-drizzle.svg");
/* harmony import */ var _assets_partly_cloudy_night_drizzle_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/partly-cloudy-night-drizzle.svg */ "./src/assets/partly-cloudy-night-drizzle.svg");
/* harmony import */ var _assets_fog_day_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/fog-day.svg */ "./src/assets/fog-day.svg");
/* harmony import */ var _assets_fog_night_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/fog-night.svg */ "./src/assets/fog-night.svg");
/* harmony import */ var _assets_snow_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/snow.svg */ "./src/assets/snow.svg");
/* harmony import */ var _assets_partly_cloudy_day_snow_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/partly-cloudy-day-snow.svg */ "./src/assets/partly-cloudy-day-snow.svg");
/* harmony import */ var _assets_hail_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/hail.svg */ "./src/assets/hail.svg");
/* harmony import */ var _assets_partly_cloudy_day_hail_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/partly-cloudy-day-hail.svg */ "./src/assets/partly-cloudy-day-hail.svg");
/* harmony import */ var _assets_partly_cloudy_night_hail_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/partly-cloudy-night-hail.svg */ "./src/assets/partly-cloudy-night-hail.svg");
/* harmony import */ var _assets_sleet_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/sleet.svg */ "./src/assets/sleet.svg");
/* harmony import */ var _assets_partly_cloudy_day_sleet_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/partly-cloudy-day-sleet.svg */ "./src/assets/partly-cloudy-day-sleet.svg");
/* harmony import */ var _assets_partly_cloudy_night_sleet_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/partly-cloudy-night-sleet.svg */ "./src/assets/partly-cloudy-night-sleet.svg");
/* harmony import */ var _assets_overcast_day_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/overcast-day.svg */ "./src/assets/overcast-day.svg");
/* harmony import */ var _assets_overcast_night_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/overcast-night.svg */ "./src/assets/overcast-night.svg");
/* harmony import */ var _assets_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/partly-cloudy-day.svg */ "./src/assets/partly-cloudy-day.svg");
/* harmony import */ var _assets_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/partly-cloudy-night.svg */ "./src/assets/partly-cloudy-night.svg");
/* harmony import */ var _assets_thunderstorms_day_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/thunderstorms-day.svg */ "./src/assets/thunderstorms-day.svg");
/* harmony import */ var _assets_thunderstorms_night_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/thunderstorms-night.svg */ "./src/assets/thunderstorms-night.svg");
/* harmony import */ var _assets_thunderstorms_day_rain_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/thunderstorms-day-rain.svg */ "./src/assets/thunderstorms-day-rain.svg");
/* harmony import */ var _assets_thunderstorms_night_rain_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/thunderstorms-night-rain.svg */ "./src/assets/thunderstorms-night-rain.svg");
/* harmony import */ var _assets_thunderstorms_day_snow_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/thunderstorms-day-snow.svg */ "./src/assets/thunderstorms-day-snow.svg");
/* harmony import */ var _assets_thunderstorms_night_snow_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../assets/thunderstorms-night-snow.svg */ "./src/assets/thunderstorms-night-snow.svg");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* importing weather icons */































// load the home page //
var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);
  }
  _createClass(UI, null, [{
    key: "loadHome",
    value: function loadHome() {
      (0,_initializeButtons__WEBPACK_IMPORTED_MODULE_1__["default"])();
      (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.getData)("London");
    }

    // render weather information on the screen //
  }, {
    key: "appendWeatherInformation",
    value: function appendWeatherInformation(location, temperatureC, temperatureF, tempCMin, tempCMax, tempFMin, tempFMax, feelsLikeC, feelsLikeF, humidity, condition) {
      this.clearContentContainer();
      var weatherContainer = document.createElement("div");
      var locationInformationContainer = document.createElement("div");
      var locationName = document.createElement("h3");
      var weatherConditionContainer = document.createElement("div");
      var weatherConditionPara = document.createElement("p");
      var weatherInformationContainer = document.createElement("div");
      var weatherImageContainer = document.createElement("div");
      var additionalInformationContainer = document.createElement("div");
      var changeTempUnitButton = document.querySelector(".change-temp-unit-button");
      weatherContainer.classList.add("weather-container");
      weatherInformationContainer.classList.add("weather-information-container");
      weatherImageContainer.classList.add("weather-image-container");
      locationInformationContainer.classList.add("location-information-container");
      weatherConditionPara.classList.add("weather-condition");
      weatherConditionContainer.classList.add("weather-condition-container");
      additionalInformationContainer.classList.add("additional-info-container");
      var tempPara = document.createElement("p");
      var minMaxTempPara = document.createElement("p");
      var humidityPara = document.createElement("p");
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
        minMaxTempPara.textContent = Math.floor(tempCMin) + "°C / " + Math.floor(tempCMax) + "°C " + "Feels Like " + Math.floor(feelsLikeC) + "°C ";
      } else {
        tempPara.textContent = Math.floor(temperatureF) + "°F ";
        minMaxTempPara.textContent = Math.floor(tempFMin) + "°F / " + Math.floor(tempFMax) + "°F " + "Feels Like " + Math.floor(feelsLikeF) + "°F ";
      }
      weatherImageContainer.appendChild(tempPara);
    }
  }, {
    key: "appendForecast",
    value: function appendForecast(forecastObject) {
      var changeTempUnitButton = document.querySelector(".change-temp-unit-button");
      this.clearForecastContainer();
      var forecastTableContainer = document.createElement("div");
      var threeDayArray = forecastObject.slice(0, 3);
      forecastTableContainer.classList.add("table-container");
      console.log(threeDayArray);
      this.getForecastContainer().appendChild(forecastTableContainer);
      forecastTableContainer.appendChild(this.createTable(3, 5));
      for (var i = 0; i < this.getAlHeadCells().length; i++) {
        this.getAlHeadCells()[0].textContent = "Date";
        this.getAlHeadCells()[1].textContent = "Min/Max Temperature";
        this.getAlHeadCells()[2].textContent = "Icon";
        this.getAlHeadCells()[3].textContent = "Weather Condition";
        this.getAlHeadCells()[4].textContent = "Sunrise/Sunset Time";
        this.getAlHeadCells()[2].classList.add("table-header-icon");
      }
      for (var _i = 0; _i < this.getAllDataCells().length; _i++) {
        this.getAllDataCells()[0].textContent = threeDayArray[0].date;
        this.getAllDataCells()[3].textContent = threeDayArray[0].day.condition.text;
        this.getAllDataCells()[4].textContent = threeDayArray[0].astro.sunrise + " / " + threeDayArray[0].astro.sunset;
        this.getAllDataCells()[5].textContent = threeDayArray[1].date;
        this.getAllDataCells()[8].textContent = threeDayArray[1].day.condition.text;
        this.getAllDataCells()[9].textContent = threeDayArray[1].astro.sunrise + " / " + threeDayArray[1].astro.sunset;
        this.getAllDataCells()[10].textContent = threeDayArray[2].date;
        this.getAllDataCells()[13].textContent = threeDayArray[2].day.condition.text;
        this.getAllDataCells()[14].textContent = threeDayArray[2].astro.sunrise + " / " + threeDayArray[2].astro.sunset;
      }
      this.appendWeatherConditionData(this.getAllDataCells()[2], threeDayArray[0].day.condition.text, 1);
      this.appendWeatherConditionData(this.getAllDataCells()[7], threeDayArray[1].day.condition.text, 1);
      this.appendWeatherConditionData(this.getAllDataCells()[12], threeDayArray[2].day.condition.text, 1);
      if (!changeTempUnitButton.classList.contains("temp-f")) {
        this.getAllDataCells()[1].textContent = Math.floor(threeDayArray[0].day.mintemp_c) + "°C" + " / " + Math.floor(threeDayArray[0].day.maxtemp_c) + "°C";
        this.getAllDataCells()[6].textContent = Math.floor(threeDayArray[1].day.mintemp_c) + "°C" + " / " + Math.floor(threeDayArray[1].day.maxtemp_c) + "°C";
        this.getAllDataCells()[11].textContent = Math.floor(threeDayArray[2].day.mintemp_c) + "°C" + " / " + Math.floor(threeDayArray[2].day.maxtemp_c) + "°C";
      } else {
        this.getAllDataCells()[1].textContent = Math.floor(threeDayArray[0].day.mintemp_f) + "°F" + " / " + Math.floor(threeDayArray[0].day.maxtemp_f) + "°F";
        this.getAllDataCells()[6].textContent = Math.floor(threeDayArray[1].day.mintemp_f) + "°F" + " / " + Math.floor(threeDayArray[1].day.maxtemp_f) + "°F";
        this.getAllDataCells()[11].textContent = Math.floor(threeDayArray[2].day.mintemp_f) + "°F" + " / " + Math.floor(threeDayArray[2].day.maxtemp_f) + "°F";
      }
      this.getAllDataCells()[2].classList.add("data-icon");
      this.getAllDataCells()[7].classList.add("data-icon");
      this.getAllDataCells()[12].classList.add("data-icon");
    }
  }, {
    key: "createTable",
    value: function createTable(tr, td) {
      var forecastTable = document.createElement("table");
      var tableHeader = document.createElement("thead");
      var tableBody = document.createElement("tbody");
      var tableRow = document.createElement("tr");
      forecastTable.appendChild(tableHeader);
      tableHeader.appendChild(tableRow);
      for (var k = 0; k < td; k++) {
        var tableHead = document.createElement("th");
        tableRow.appendChild(tableHead);
      }
      forecastTable.appendChild(tableBody);
      for (var j = 0; j < tr; j++) {
        var tableRowForecast = document.createElement("tr");
        tableBody.appendChild(tableRowForecast);
        for (var i = 0; i < td; i++) {
          var tableDataForecast = document.createElement("td");
          tableRowForecast.appendChild(tableDataForecast);
        }
      }
      return forecastTable;
    }
  }, {
    key: "appendWeatherConditionData",
    value: function appendWeatherConditionData(element, condition, isDay) {
      var imageElement = document.createElement("img");
      switch (true) {
        case (condition === "Clear" || condition === "Sunny") && isDay === 1:
          imageElement.src = _assets_clear_day_svg__WEBPACK_IMPORTED_MODULE_3__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Clear" || condition === "Sunny") && isDay === 0:
          imageElement.src = _assets_clear_night_svg__WEBPACK_IMPORTED_MODULE_4__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition === "Cloudy":
          imageElement.src = _assets_cloudy_svg__WEBPACK_IMPORTED_MODULE_5__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition === "Light rain" || condition === "Moderate rain" || condition === "Heavy rain":
          imageElement.src = _assets_rain_svg__WEBPACK_IMPORTED_MODULE_6__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Patchy light rain" || condition === "Moderate rain at times" || condition === "Heavy rain at times" || condition === "Light rain shower" || condition === "Moderate or heavy rain shower" || condition === "Torrential rain shower" || condition === "Patchy rain possible") && isDay === 1:
          imageElement.src = _assets_partly_cloudy_day_rain_svg__WEBPACK_IMPORTED_MODULE_7__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Patchy light rain" || condition === "Moderate rain at times" || condition === "Heavy rain at times" || condition === "Light rain shower" || condition === "Moderate or heavy rain shower" || condition === "Torrential rain shower" || condition === "Patchy rain possible") && isDay === 0:
          imageElement.src = _assets_partly_cloudy_night_rain_svg__WEBPACK_IMPORTED_MODULE_8__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition === "Light freezing rain" || condition === "Moderate or heavy freezing rain" || condition === "Light sleet" || condition === "Moderate or heavy sleet":
          imageElement.src = _assets_sleet_svg__WEBPACK_IMPORTED_MODULE_18__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Light sleet showers" || condition === "Moderate or heavy sleet showers") && isDay === 1:
          imageElement.src = _assets_partly_cloudy_day_sleet_svg__WEBPACK_IMPORTED_MODULE_19__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Light sleet showers" || condition === "Moderate or heavy sleet showers") && isDay === 0:
          imageElement.src = _assets_partly_cloudy_night_sleet_svg__WEBPACK_IMPORTED_MODULE_20__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Fog" || condition === "Freezing fog" || condition === "Mist") && isDay === 1:
          imageElement.src = _assets_fog_day_svg__WEBPACK_IMPORTED_MODULE_11__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Fog" || condition === "Freezing fog" || condition === "Mist") && isDay === 0:
          imageElement.src = _assets_fog_night_svg__WEBPACK_IMPORTED_MODULE_12__;
          break;
        case condition === "Overcast" && isDay === 1:
          imageElement.src = _assets_overcast_day_svg__WEBPACK_IMPORTED_MODULE_21__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition === "Overcast" && isDay === 0:
          imageElement.src = _assets_overcast_night_svg__WEBPACK_IMPORTED_MODULE_22__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition === "Partly cloudy" && isDay === 1:
          imageElement.src = _assets_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_23__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition === "Partly cloudy" && isDay === 0:
          imageElement.src = _assets_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_24__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition === "Light snow" || condition === "Heavy snow" || condition === "Moderate snow" || condition === "Blizzard" || condition === "Blowing snow":
          imageElement.src = _assets_snow_svg__WEBPACK_IMPORTED_MODULE_13__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition.includes("drizzle") && isDay === 1:
          imageElement.src = _assets_partly_cloudy_day_drizzle_svg__WEBPACK_IMPORTED_MODULE_9__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition.includes("drizzle") && isDay === 0:
          imageElement.src = _assets_partly_cloudy_night_drizzle_svg__WEBPACK_IMPORTED_MODULE_10__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Patchy snow possible" || condition === "Patchy light snow" || condition === "Patchy moderate snow" || condition === "Patchy heavy snow " || condition === "Light snow showers" || condition === "Moderate or heavy snow showers ") && isDay === 1:
          imageElement.src = _assets_partly_cloudy_day_snow_svg__WEBPACK_IMPORTED_MODULE_14__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Patchy snow possible" || condition === "Patchy light snow" || condition === "Patchy moderate snow" || condition === "Patchy heavy snow " || condition === "Light snow showers" || condition === "Moderate or heavy snow showers ") && isDay === 0:
          imageElement.src = _assets_partly_cloudy_day_snow_svg__WEBPACK_IMPORTED_MODULE_14__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition === "Ice pellets" || condition === "Light showers of ice pellets":
          imageElement.src = _assets_hail_svg__WEBPACK_IMPORTED_MODULE_15__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition === "Moderate or heavy showers of ice pellets" && isDay === 1:
          imageElement.src = _assets_partly_cloudy_day_hail_svg__WEBPACK_IMPORTED_MODULE_16__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition === "Moderate or heavy showers of ice pellets" && isDay === 0:
          imageElement.src = _assets_partly_cloudy_night_hail_svg__WEBPACK_IMPORTED_MODULE_17__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Patchy light rain with thunder" || condition === "Moderate or heavy rain with thunder") && isDay === 1:
          imageElement.src = _assets_thunderstorms_day_rain_svg__WEBPACK_IMPORTED_MODULE_27__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Patchy light rain with thunder" || condition === "Moderate or heavy rain with thunder") && isDay === 0:
          imageElement.src = _assets_thunderstorms_night_rain_svg__WEBPACK_IMPORTED_MODULE_28__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition === "Thundery outbreaks possible" && isDay === 1:
          imageElement.src = _assets_thunderstorms_day_svg__WEBPACK_IMPORTED_MODULE_25__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case condition === "Thundery outbreaks possible" && isDay === 0:
          imageElement.src = _assets_thunderstorms_night_svg__WEBPACK_IMPORTED_MODULE_26__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Patchy light snow with thunder" || condition === "Moderate or heavy snow with thunder") && isDay === 1:
          imageElement.src = _assets_thunderstorms_day_snow_svg__WEBPACK_IMPORTED_MODULE_29__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        case (condition === "Patchy light snow with thunder" || condition === "Moderate or heavy snow with thunder") && isDay === 0:
          imageElement.src = _assets_thunderstorms_night_snow_svg__WEBPACK_IMPORTED_MODULE_30__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
        default:
          imageElement.src = _assets_not_available_svg__WEBPACK_IMPORTED_MODULE_2__;
          element.insertAdjacentElement("afterbegin", imageElement);
          break;
      }
    }

    /* fetch the date again so that we can display F or C units on the screen */
  }, {
    key: "changeWeatherUnit",
    value: function changeWeatherUnit() {
      var changeTempUnitButton = document.querySelector(".change-temp-unit-button");
      var h3TitleLocation = document.querySelector("h3").innerText;
      if (!changeTempUnitButton.classList.contains("temp-f")) {
        changeTempUnitButton.textContent = "Change to °F";
      } else changeTempUnitButton.textContent = "Change to °C";
      (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.getData)(h3TitleLocation);
    }

    //clear content of forecast container //
  }, {
    key: "clearContentContainer",
    value: function clearContentContainer() {
      this.getContentContainer().textContent = "";
    }
  }, {
    key: "clearForecastContainer",
    value: function clearForecastContainer() {
      this.getForecastContainer().textContent = "";
    }
  }, {
    key: "getMainContainer",
    value: function getMainContainer() {
      return document.querySelector(".main-container");
    }

    // get content container //
  }, {
    key: "getContentContainer",
    value: function getContentContainer() {
      return document.querySelector(".content-container");
    }
  }, {
    key: "getIconContainer",
    value: function getIconContainer() {
      return document.querySelector(".icon-container");
    }
  }, {
    key: "getTemperatureContainer",
    value: function getTemperatureContainer() {
      return document.querySelector(".location-temperature");
    }
  }, {
    key: "getWeatherImageContainer",
    value: function getWeatherImageContainer() {
      return document.querySelector(".weather-image-container");
    }
  }, {
    key: "getAllDataCells",
    value: function getAllDataCells() {
      return document.querySelectorAll("td");
    }
  }, {
    key: "getAlHeadCells",
    value: function getAlHeadCells() {
      return document.querySelectorAll("th");
    }
  }, {
    key: "getForecastContainer",
    value: function getForecastContainer() {
      return document.querySelector(".forecast-container");
    }
  }]);
  return UI;
}();


/***/ }),

/***/ "./src/modules/weatherData.js":
/*!************************************!*\
  !*** ./src/modules/weatherData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* async function so that my WeatherAPI can fetch the data */

// fetch the  data from the Weather API //
function getData(_x) {
  return _getData.apply(this, arguments);
}
function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(location) {
    var data, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(" https://api.weatherapi.com/v1/forecast.json?key=c25c0f620d434f86841143300232209&q=".concat(location, "&days=6&aqi=no&alerts=no"), {
            mode: "cors"
          });
        case 3:
          data = _context.sent;
          _context.next = 6;
          return data.json();
        case 6:
          result = _context.sent;
          if (!(location == "")) {
            _context.next = 11;
            break;
          }
          throw new Error("Search input field, can't be empty! Please insert the name of the city.");
        case 11:
          if (data.ok) {
            _context.next = 13;
            break;
          }
          throw new Error("Sorry, ".concat(location, " is not a valid city!"));
        case 13:
          _ui__WEBPACK_IMPORTED_MODULE_1__["default"].appendWeatherInformation(result.location.name, result.current.temp_c, result.current.temp_f, result.forecast.forecastday[0].day.mintemp_c, result.forecast.forecastday[0].day.maxtemp_c, result.forecast.forecastday[0].day.mintemp_f, result.forecast.forecastday[0].day.maxtemp_f, result.current.feelslike_c, result.current.feelslike_f, result.current.humidity, result.current.condition.text, result.current.is_day);
          _ui__WEBPACK_IMPORTED_MODULE_1__["default"].appendWeatherConditionData(_ui__WEBPACK_IMPORTED_MODULE_1__["default"].getWeatherImageContainer(), result.current.condition.text, result.current.is_day);
          _ui__WEBPACK_IMPORTED_MODULE_1__["default"].appendForecast(result.forecast.forecastday);
          return _context.abrupt("return", result);
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          alert(_context.t0, "");
          return _context.abrupt("return", null);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 19]]);
  }));
  return _getData.apply(this, arguments);
}

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/clear-day.svg":
/*!**********************************!*\
  !*** ./src/assets/clear-day.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "clear-day.svg";

/***/ }),

/***/ "./src/assets/clear-night.svg":
/*!************************************!*\
  !*** ./src/assets/clear-night.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "clear-night.svg";

/***/ }),

/***/ "./src/assets/cloudy.svg":
/*!*******************************!*\
  !*** ./src/assets/cloudy.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cloudy.svg";

/***/ }),

/***/ "./src/assets/fog-day.svg":
/*!********************************!*\
  !*** ./src/assets/fog-day.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fog-day.svg";

/***/ }),

/***/ "./src/assets/fog-night.svg":
/*!**********************************!*\
  !*** ./src/assets/fog-night.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fog-night.svg";

/***/ }),

/***/ "./src/assets/hail.svg":
/*!*****************************!*\
  !*** ./src/assets/hail.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hail.svg";

/***/ }),

/***/ "./src/assets/not-available.svg":
/*!**************************************!*\
  !*** ./src/assets/not-available.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "not-available.svg";

/***/ }),

/***/ "./src/assets/overcast-day.svg":
/*!*************************************!*\
  !*** ./src/assets/overcast-day.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "overcast-day.svg";

/***/ }),

/***/ "./src/assets/overcast-night.svg":
/*!***************************************!*\
  !*** ./src/assets/overcast-night.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "overcast-night.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-day-drizzle.svg":
/*!**************************************************!*\
  !*** ./src/assets/partly-cloudy-day-drizzle.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "partly-cloudy-day-drizzle.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-day-hail.svg":
/*!***********************************************!*\
  !*** ./src/assets/partly-cloudy-day-hail.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "partly-cloudy-day-hail.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-day-rain.svg":
/*!***********************************************!*\
  !*** ./src/assets/partly-cloudy-day-rain.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "partly-cloudy-day-rain.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-day-sleet.svg":
/*!************************************************!*\
  !*** ./src/assets/partly-cloudy-day-sleet.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "partly-cloudy-day-sleet.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-day-snow.svg":
/*!***********************************************!*\
  !*** ./src/assets/partly-cloudy-day-snow.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "partly-cloudy-day-snow.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-day.svg":
/*!******************************************!*\
  !*** ./src/assets/partly-cloudy-day.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "partly-cloudy-day.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-night-drizzle.svg":
/*!****************************************************!*\
  !*** ./src/assets/partly-cloudy-night-drizzle.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "partly-cloudy-night-drizzle.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-night-hail.svg":
/*!*************************************************!*\
  !*** ./src/assets/partly-cloudy-night-hail.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "partly-cloudy-night-hail.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-night-rain.svg":
/*!*************************************************!*\
  !*** ./src/assets/partly-cloudy-night-rain.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "partly-cloudy-night-rain.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-night-sleet.svg":
/*!**************************************************!*\
  !*** ./src/assets/partly-cloudy-night-sleet.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "partly-cloudy-night-sleet.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-night.svg":
/*!********************************************!*\
  !*** ./src/assets/partly-cloudy-night.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "partly-cloudy-night.svg";

/***/ }),

/***/ "./src/assets/rain.svg":
/*!*****************************!*\
  !*** ./src/assets/rain.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rain.svg";

/***/ }),

/***/ "./src/assets/sleet.svg":
/*!******************************!*\
  !*** ./src/assets/sleet.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sleet.svg";

/***/ }),

/***/ "./src/assets/snow.svg":
/*!*****************************!*\
  !*** ./src/assets/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "snow.svg";

/***/ }),

/***/ "./src/assets/thunderstorms-day-rain.svg":
/*!***********************************************!*\
  !*** ./src/assets/thunderstorms-day-rain.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "thunderstorms-day-rain.svg";

/***/ }),

/***/ "./src/assets/thunderstorms-day-snow.svg":
/*!***********************************************!*\
  !*** ./src/assets/thunderstorms-day-snow.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "thunderstorms-day-snow.svg";

/***/ }),

/***/ "./src/assets/thunderstorms-day.svg":
/*!******************************************!*\
  !*** ./src/assets/thunderstorms-day.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "thunderstorms-day.svg";

/***/ }),

/***/ "./src/assets/thunderstorms-night-rain.svg":
/*!*************************************************!*\
  !*** ./src/assets/thunderstorms-night-rain.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "thunderstorms-night-rain.svg";

/***/ }),

/***/ "./src/assets/thunderstorms-night-snow.svg":
/*!*************************************************!*\
  !*** ./src/assets/thunderstorms-night-snow.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "thunderstorms-night-snow.svg";

/***/ }),

/***/ "./src/assets/thunderstorms-night.svg":
/*!********************************************!*\
  !*** ./src/assets/thunderstorms-night.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "thunderstorms-night.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");


document.addEventListener("DOMContentLoaded", _modules_ui__WEBPACK_IMPORTED_MODULE_1__["default"].loadHome);
})();

/******/ })()
;
//# sourceMappingURL=bundle.3275b07148aad08740ac.js.map