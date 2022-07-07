import "../scss/style.scss"
import  { updateWeather, updateForecast } from "./data"

const city = "Bien Hoa"
updateWeather(city);
updateForecast(city);