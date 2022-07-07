function updateCityName(cityName: string) {
  const _cityName = document.querySelector(".info__name") as HTMLElement;
  _cityName.innerText = cityName;
}

function updateDate(dateTime: string) {
  const _dateTime = document.querySelector(".info__date") as HTMLElement;
  _dateTime.innerText = dateTime;
}

function updateTemperature(temperature: string) {
  const _temperature = document.querySelector(".temp__value") as HTMLElement;
  _temperature.innerText = temperature;
}

function updateCondition(condition: string) {
  const _condition = document.querySelector(".today__cond") as HTMLElement;
  _condition.innerText = condition;
}

function updateIcon(icon: string) {
  const _icon = document.querySelector(".today__icon--img") as HTMLImageElement;
  _icon.src = `http://openweathermap.org/img/wn/${icon}@4x.png`;
}

function updateWindStatus(windSpeed: string) {
  const _windSpeed = document.querySelector(
    ".highlight__value--wind"
  ) as HTMLElement;
  _windSpeed.innerText = windSpeed;
}

function updateWindDegree(windDegree: number) {
  const cardinalPoint = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const direction = Math.round(windDegree / (360 / cardinalPoint.length));
  const _windDegree = document.querySelector(".dir__name") as HTMLElement;
  _windDegree.innerText = cardinalPoint[direction % cardinalPoint.length];

  const dirIcon = document.querySelector(".dir__value") as HTMLElement;
  dirIcon.style.transform = `rotate(${windDegree}deg)`;
}

function updateHumidity(humidity: string) {
  const _humidity = document.querySelector(
    ".highlight__value--humid"
  ) as HTMLElement;
  _humidity.innerText = humidity;

  const progressBar = document.querySelector(
    ".highlight--humid__bar"
  ) as HTMLElement;
  progressBar.setAttribute("value", humidity);
}

function updateVisibility(visibility: string) {
  const _visibility = document.querySelector(
    ".highlight__value--vis"
  ) as HTMLElement;
  _visibility.innerText = visibility;
}

function updatePressure(pressure: string) {
  const _pressure = document.querySelector(
    ".highlight__value--air"
  ) as HTMLElement;
  _pressure.innerText = pressure;
}

function getForecastDays() {
  const forecastDays = document.querySelectorAll(".forecast__day");
  return forecastDays;
}

function updateForecastDate(forecastBlock: Element, dateTime: string) {
  const _dateTime = forecastBlock.querySelector(".day__date") as HTMLElement;
  _dateTime.innerText = dateTime;
}

function updateMinTemperature(forecastBlock: Element, temperature: string) {
  const _minTemperature = forecastBlock.querySelector(".temp__value--min") as HTMLElement;
  _minTemperature.innerText = temperature;
}

function updateMaxTemperature(forecastBlock: Element, temperature: string) {
  const _temperature = forecastBlock.querySelector(".temp__value--max") as HTMLSpanElement;
  _temperature.innerText = temperature;
}

function updateForecastIcon(forecastBlock: Element, icon: string) {
  const _icon = forecastBlock.querySelector(".day__icon--img") as HTMLImageElement;
  _icon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

export {
  updateCityName,
  updateDate,
  updateTemperature,
  updateCondition,
  updateIcon,
  updateWindStatus,
  updateWindDegree,
  updateHumidity,
  updateVisibility,
  updatePressure,
  getForecastDays,
  updateForecastDate,
  updateMinTemperature,
  updateMaxTemperature,
  updateForecastIcon,
};
