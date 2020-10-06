const COORDS = 'coords';

function handleGeoError() {
  console.log('위치정보 가져올 수 없음');
}

function handleGeoSuccess(position) {
  console.log(position);
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
