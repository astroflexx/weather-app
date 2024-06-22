function clearWeatherData() {
    const weatherData = document.querySelector('.weather-data');

    weatherData.childNodes.forEach((child) => {
        child.textContent = '';
    });
}

export default clearWeatherData;