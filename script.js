const forecastBtn = document.querySelector('.forecast-btn');
const newForecast = document.querySelector('.current-forecast h1');
const percent = document.querySelector('.current-forecast p');
const forecastList = document.querySelector('.forecasts');
const forecastItem = document.getElementById('forecast-item');

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}