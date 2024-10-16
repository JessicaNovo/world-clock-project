function displayTimeAndDate(id, timezone) {
  let cityElement = document.querySelector(id);

  if(cityElement) {
    let cityDateElement = cityElement.querySelector(".date");
    let cityTimeElement = cityElement.querySelector(".city-time");

    let cityTime = moment().tz(timezone);
    cityDateElement.innerHTML = cityTime.format("MMMM Do YYYY");
    cityTimeElement.innerHTML = cityTime.format("h:mm:ss [<span>]A[</span>]");
  }
}

function updateDates() {
  displayTimeAndDate("#first-city", "Europe/Lisbon");
  displayTimeAndDate("#second-city", "Asia/Tokyo");
}

updateDates();
setInterval(updateDates, 1000);

function updateCity(event) {
  if(event.target.value) {
    let selectedCityTimezone = event.target.value === "current" ? moment.tz.guess() : event.target.value;

    console.log(selectedCityTimezone);

    let cityName = selectedCityTimezone.split("/")[1].replace("_", " ");

    let citiesListElement = document.querySelector("#cities-list");

    let newCityElement = `
      <div class="city-block" id="selected-city">
        <div class="city-date">
          <h2 class="city-name">${cityName}</h2>
          <div class="date">loading...</div>
        </div>
        <div class="city-time">loading...</div>
      </div>
    `;

    citiesListElement.innerHTML = newCityElement;

    displayTimeAndDate("#selected-city", selectedCityTimezone);
  }
}

let citiesSelectElement = document.querySelector("#city-selected");

citiesSelectElement.addEventListener("change", updateCity);