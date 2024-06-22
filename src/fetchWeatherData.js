async function fetchWeatherData(lat, lon, unit) {
    const API_KEY = 'f7bf597c02f6ab7d56cdb8f7254810f6';

    try {

        const system = unit === 'Celsius' ? 'Metric' : 'Imperial';

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${system}&appid=${API_KEY}`
        );

        const data = await response.json();

        // check data code

        if (data.cod >= 200 && data.cod < 300) {

            // successfully fetched weather data

            return data;
        } else {

            // invalid response code

            throw new Error(`Unable to fetch location. Error code: ${data.cod}`);
        }
    } catch (error) {

        // request error

        throw error;
    }
}

export default fetchWeatherData;