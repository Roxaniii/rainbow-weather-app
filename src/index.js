let nowDate = new Date();
let currentDate = document.querySelector(".currentDate");
let date = nowDate.getDate();
let hours = nowDate.getHours();
let minutes = nowDate.getMinutes();
let year = nowDate.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturdays",
];
let day = days[nowDate.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[nowDate.getMonth()];
currentDate.innerHTML = `${day}, ${month} ${date}, ${hours}:${minutes}, ${year}.`;

//Search City
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//Convert to Celsius
function showCelsius(event) {
  event.preventDefault();
  let celsius = document.querySelector("h2");
  celsius.innerHTML = "13°";
}
let displayCelsius = document.querySelector("#celsius");
displayCelsius.addEventListener("click", showCelsius);

//Convert to Fahrenheit
function showFahrenheit(event) {
  event.preventDefault();
  let fahrenheit = document.querySelector("h2");
  fahrenheit.innerHTML = "60°";
}
let displayFahrenheit = document.querySelector("#fahrenheit");
displayFahrenheit.addEventListener("click", showFahrenheit);
