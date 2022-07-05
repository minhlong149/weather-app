import {
  updateCityName,
  updateDate,
  updateTemperature,
  updateCondition,
  updateIcon,
  updateWindStatus,
  updateHumidity,
  updateVisibility,
  updatePressure,
} from "./ui";

interface Weather {
  name: string;
  dateTime: string;
  temp: number;
  condition: string;
  icon:string;
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
  condition: string;
  temp_min: string;
  temp_max: string;
}

async function getWeather(cityName: string) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}&units=metric`;
  const weatherResponse = await fetch(weatherUrl, { mode: "cors" });
  const weatherData = await weatherResponse.json();
  return weatherData;
}

async function getForecast(cityName: string) {
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.API_KEY}&units=metric`;
  const forecastResponse = await fetch(forecastUrl, { mode: "cors" });
  const forecastData = await forecastResponse.json();
  return forecastData;
}

function setDate(date: Date): string {
  return date.toDateString().slice(0, -5).replace(" ", ", ");
}

async function updateWeather(cityName: string) {
  const weatherData = await getWeather(cityName);
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
}

async function updateForecast(cityName: string) {
  const forecastData = await getForecast(cityName);
  const currentForecast: Forecast[] = [
    forecastData.list
      .filter((list: any, index: number) => index % 8 === 0)
      .map((list: any) => ({
        dateTime: setDate(new Date(list.dt * 1000)),
        condition: list.weather[0].main,
        temp_min: Math.round(list.main.temp_min),
        temp_max: Math.round(list.main.temp_max),
      })),
  ];
  updateForecastUI(currentForecast);
}

function updateWeatherUI(currentWeather: Weather) {
  updateCityName(currentWeather.name);
  updateDate(currentWeather.dateTime);
  updateTemperature(currentWeather.temp.toString());
  updateCondition(currentWeather.condition);
  updateIcon(currentWeather.icon);
  updateWindStatus(currentWeather.wind.speed, currentWeather.wind.deg);
  updateHumidity(currentWeather.humidity);
  updateVisibility(currentWeather.visibility);
  updatePressure(currentWeather.pressure);
}
function updateForecastUI(currentForecast: Forecast[]) {
  console.log(currentForecast);
}

export { updateWeather, updateForecast };
