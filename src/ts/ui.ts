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
  const _icon = document.querySelector(
    ".today__icon--img"
  ) as HTMLImageElement;
  _icon.src = `http://openweathermap.org/img/wn/${icon}@4x.png`;
}

function updateWindStatus(windSpeed: string, windDegree: number) {
  const _windSpeed = document.querySelector(
    ".highlight__value--wind"
  ) as HTMLElement;
  _windSpeed.innerText = windSpeed;

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

export {
  updateCityName,
  updateDate,
  updateTemperature,
  updateCondition,
  updateIcon,
  updateWindStatus,
  updateHumidity,
  updateVisibility,
  updatePressure,
};
