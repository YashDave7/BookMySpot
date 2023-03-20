const getLocationBtn = document.getElementById('get-location-btn');
const cityNameSpan = document.getElementById('city-name');
const coordinatesSpan = document.getElementById('coordinates');

getLocationBtn.addEventListener('click', () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
      const data = await response.json();
      const cityName = data.city || 'Unknown City';
      cityNameSpan.textContent = cityName;
    //   coordinatesSpan.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    });
  } else {
    cityNameSpan.textContent = 'Geolocation is not supported by this browser.';
  }
});
