const API_KEY = "0133a544cfa7e0f119be040201fdfea0";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      weather.innerText = `${data.weather[0].main}, `;
      temp.innerText = `${data.main.temp}, `;
      city.innerText = data.name;
    }); // fetch를 이용해 실제로 url에 갈 필요 없이 javascript가 대신 url을 부름
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
