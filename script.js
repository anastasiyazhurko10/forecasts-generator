const forecastBtn = document.querySelector('.forecast-btn');
const newForecast = document.querySelector('.current-forecast h1');
const percent = document.querySelector('.current-forecast p');
const forecastList = document.querySelector('.forecasts');
const forecastItem = document.getElementById('forecast-item');

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const predictions = [
  "Ты съездишь в путешествие",
  "В течение недели тебя ждет приятный сюрприз",
  "В этом году ты найдешь работу мечты",
  "Спорт укоренится в твоей жизни, и ты начнешь получать удовольствие",
  "Ты очень приятно проведешь много времени с близкими людьми"
];

forecastBtn.addEventListener('click', function() {
    const predictionsIndex = generateRandomNumber(0, predictions.length);
    const predictionsText = predictions[predictionsIndex];
    const probability = generateRandomNumber(60, 100);
    newForecast.textContent = predictionsText;
    percent.textContent = `Вероятность ${probability}%`;

    const clone = forecastItem.content.cloneNode(true);
});