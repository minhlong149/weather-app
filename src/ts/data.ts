import {
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
} from "./ui";

interface Weather {
  name: string;
  dateTime: string;
  temp: number;
  condition: string;
  icon: string;
  wind: {
    speed: string;
    deg: number;
  };
  humidity: string;
  visibility: string;
  pressure: string;
}

interface Forecast {
  dateTime: string;
  icon: string;
  temp_min: string;
  temp_max: string;
}

async function getWeather(cityName: string, useMetric: boolean) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}&units=${useMetric ? "metric" : "imperial"}`;
  const weatherResponse = await fetch(weatherUrl, { mode: "cors" });
  const weatherData = await weatherResponse.json();
  return weatherData;
}

async function getForecast(cityName: string, useMetric: boolean) {
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.API_KEY}&units=${useMetric ? "metric" : "imperial"}`;
  const forecastResponse = await fetch(forecastUrl, { mode: "cors" });
  const forecastData = await forecastResponse.json();
  return forecastData;
}

function setDate(date: Date): string {
  return date.toDateString().slice(0, -5).replace(" ", ", ");
}

async function updateWeather(cityName: string, useMetric:boolean = true) {
  const weatherData = await getWeather(cityName, useMetric);
  const currentWeather: Weather = {
    name: weatherData.name,
    dateTime: setDate(new Date(weatherData.dt * 1000)),
    temp: Math.round(weatherData.main.temp),
    condition: weatherData.weather[0].main,
    icon: weatherData.weather[0].icon,
    wind: {
      speed: weatherData.wind.speed,
      deg: weatherData.wind.deg,
    },
    humidity: weatherData.main.humidity,
    visibility: weatherData.visibility,
    pressure: weatherData.main.pressure,
  };
  updateWeatherUI(currentWeather);

  const forecastData = await getForecast(cityName, useMetric);
  const currentForecast: Forecast[] = forecastData.list
    .filter((list: any, index: number) => index % 8 === 5)
    .map((list: any) => ({
      dateTime: setDate(new Date(list.dt * 1000)),
      icon: list.weather[0].icon,
      temp_min: Math.round(list.main.temp_min),
      temp_max: Math.round(list.main.temp_max),
    }));
  updateForecastUI(currentForecast);
}

function updateWeatherUI(currentWeather: Weather) {
  updateCityName(currentWeather.name);
  updateDate(currentWeather.dateTime);
  updateTemperature(currentWeather.temp.toString());
  updateCondition(currentWeather.condition);
  updateIcon(currentWeather.icon);
  updateWindStatus(currentWeather.wind.speed);
  updateWindDegree(currentWeather.wind.deg);
  updateHumidity(currentWeather.humidity);
  updateVisibility(currentWeather.visibility);
  updatePressure(currentWeather.pressure);
}
function updateForecastUI(currentForecast: Forecast[]) {
  const forecastDays = getForecastDays();
  forecastDays.forEach((forecastDay, index) => {
    updateForecastDate(forecastDay, currentForecast[index].dateTime);
    updateMinTemperature(forecastDay, currentForecast[index].temp_min);
    updateMaxTemperature(forecastDay, currentForecast[index].temp_max);
    updateForecastIcon(forecastDay, currentForecast[index].icon);
  });
}

export { updateWeather };
