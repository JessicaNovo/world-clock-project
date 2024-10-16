

function displayTimeAndDate(id, timezone) {
  let firstCityElement = document.querySelector(id);
  let firstCityDateElement = firstCityElement.querySelector(".date");
  let firstCityTimeElement = firstCityElement.querySelector(".city-time");

  let firstCityTime = moment().tz(timezone);
  firstCityDateElement.innerHTML = firstCityTime.format("MMMM Do YYYY");
  firstCityTimeElement.innerHTML = firstCityTime.format("h:mm:ss [<span>]A[</span>]");
}

function updateDates() {
  displayTimeAndDate("#first-city", "Europe/Lisbon");
  displayTimeAndDate("#second-city", "Asia/Tokyo")
}

setInterval(updateDates, 1000);