function getWeatherData(data, unit, location) {
    return {
        location,
        weather: data.weather[0].main, 
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        unit,
    };
}

export default getWeatherData;