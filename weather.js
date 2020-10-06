const COORDS = 'coords';

function handleGeoError() {
  console.log('위치정보 가져올 수 없음');
}

function saveLocation(locationObj) {
  localStorage.setItem(COORDS, JSON.stringify(locationObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const locationObj = {
    latitude,
    longitude,
  };
  saveLocation(locationObj);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    // getWeather();
  }
}

function init() {
  loadCoords();
}

init();
