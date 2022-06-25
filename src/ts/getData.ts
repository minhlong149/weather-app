interface Weather {
  name: string;
  dateTime: string;
  temp: number;
  condition: string;
  wind: {
    speed: number;
    deg: number;
  };
  humidity: number;
  visibility: number;
  pressure: number;
}

interface Forecast {
  dateTime: string;
  condition: string;
  temp_min: number;
  temp_max: number;
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

function setDate(date: Date):string {
  return date.toDateString().slice(0, -5).replace(" ", ", ");
}

function updateWeather(cityName: string) {
  getWeather(cityName)
    .then(
      (weatherData): Weather => ({
        name: weatherData.name,
        dateTime: setDate(new Date(weatherData.dt * 1000)),
        temp: Math.round(weatherData.main.temp),
        condition: weatherData.weather[0].main,
        wind: {
          speed: weatherData.wind.speed,
          deg: weatherData.wind.deg,
        },
        humidity: weatherData.main.humidity,
        visibility: weatherData.visibility,
        pressure: weatherData.main.pressure,
      })
    )
    .then((currentWeather: Weather) => updateWeatherUI(currentWeather));
}

function updateForecast(cityName: string) {
  getForecast(cityName)
    .then((forecastData): Forecast[] => [
      forecastData.list
        .filter((list: any, index: number) => index % 8 === 0)
        .map((list: any) => ({
          dateTime: setDate(new Date(list.dt * 1000)),
          condition: list.weather[0].main,
          temp_min: Math.round(list.main.temp_min),
          temp_max: Math.round(list.main.temp_max),
        })),
    ])
    .then((currentForecast: Forecast[]) => updateForecastUI(currentForecast));
}

function updateWeatherUI(currentWeather: Weather) {
  console.log(currentWeather);
}
function updateForecastUI(currentForecast: Forecast[]) {
  console.log(currentForecast);
}

export { updateWeather, updateForecast };