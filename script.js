let currentTime = new Date();

let currentDateTimeElement = document.getElementById("currentDateTime");
let options = {
  weekday: "long",
  hour: "2-digit",
  minute: "2-digit",
};
let formattedDateTime = currentTime.toLocaleDateString("en-US", options);
currentDateTimeElement.innerHTML = formattedDateTime;

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("h1");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", search);