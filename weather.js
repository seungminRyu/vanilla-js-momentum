const COORDS = 'coords';
const API_KEY = '01e754f876ab9eaae68c23c5c11d884c';
const $weather = document.querySelector('.js-weather');

function handleGeoError() {
  console.log('위치정보 가져올 수 없음');
}

function saveLocation(locationObj) {
  localStorage.setItem(COORDS, JSON.stringify(locationObj));
}

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      $weather.innerHTML = `${json.main.temp}`;
    });
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const locationObj = {
    latitude,
    longitude,
  };
  saveLocation(locationObj);
  getWeather(latitude, longitude);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
