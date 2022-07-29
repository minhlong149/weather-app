import "../scss/style.scss";
import { updateWeather } from "./data";

let city = "Bien Hoa";
updateWeather(city);
// updateForecast(city);

const unitsButtons = document.querySelectorAll(".units__btn");
unitsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // When click to a button that is not active
    if (!button.classList.contains("units__btn--active")) {
      // Toggle classlist
      unitsButtons.forEach((btn) => btn.classList.toggle("units__btn--active"));

      // Update weather
      const useMetric = button.innerHTML == "C";
      updateWeather(city, useMetric).then(() => {
        // Update unit
        const unitsValues = document.querySelectorAll(".temp__unit");
        unitsValues.forEach((unit) => {
          unit.innerHTML = button.innerHTML;
        });
      });
    }
  });
});
const sidebarSearch = document.querySelector(".sidebar--search") as HTMLElement;
const cancelSearchButton = sidebarSearch.querySelector(
  ".search__cancel"
) as HTMLButtonElement;
cancelSearchButton.addEventListener("click", () => {
  sidebarSearch.classList.add("search--hidden");
});

const searchButton = document.querySelector(
  ".location__btn--search"
) as HTMLButtonElement;
searchButton.addEventListener("click", () => {
  sidebarSearch.classList.remove("search--hidden");
});
