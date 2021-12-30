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
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;

  let apiKey = "f570a1fbc37130aef5bf06a2e40664d1";
  let units = "metric";
  let city = document.querySelector("#search-text-input");
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${searchInput.value}&units=${units}`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

//Show temperature

function showTemperature(response) {
  console.log(response.data);
  console.log(response.data.main.temp);
  let currentTemp = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("h2");
  temperatureElement.innerHTML = `${currentTemp} °C`;
}
// Show Geocordinates
function showCurrentPosition(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = "f570a1fbc37130aef5bf06a2e40664d1";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";

  axios
    .get(
      `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    )
    .then(showTemperature);
}

// let apiUrl = `${apiEndpoint}lat=${latitude}&lon=${longitude}`;

// let btnElement = document.querySelector("#currentButton");
// btnElement.innerHTML = `${currentTemp}°C`;
//
//axios
//.get(`${apiEndpoint}lat=${latitude}&lon${longitude}`)
//.then(showTemperature);

let btn = document.querySelector("#currentButton");
btn.addEventListener("click", getCurrentLocation);
navigator.geolocation.getCurrentPosition(showCurrentPosition);

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}

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
