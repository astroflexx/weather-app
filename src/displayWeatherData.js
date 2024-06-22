function displayWeatherData(data) {

    const locationElement = document.querySelector('.location');
    const weatherElement = document.querySelector('.weather');
    const tempElement = document.querySelector('.temp');
    const feelsLikeElement = document.querySelector('.feelsLike');
    const tempMinElement = document.querySelector('.tempMin');
    const tempMaxElement = document.querySelector('.tempMax');
    const humidityElement = document.querySelector('.humidity');
    const pressureElement = document.querySelector('.pressure');

    locationElement.textContent = data.location;
    weatherElement.textContent = `Weather right now: ${data.weather}`;
    tempElement.textContent = `Temperature (in ${data.unit}): ${data.temp}`;
    feelsLikeElement.textContent = `Feels like: ${data.feelsLike}`;
    tempMinElement.textContent = `Temperature (min): ${data.tempMin}`;
    tempMaxElement.textContent = `Temperature (max): ${data.tempMax}`;
    humidityElement.textContent = `Humidity: ${data.humidity}`;
    pressureElement.textContent = `Pressure: ${data.pressure}`;
}

export default displayWeatherData;