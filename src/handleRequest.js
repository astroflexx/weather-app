import displayWeatherData from "./displayWeatherData";
import fetchGeolocation from "./fetchGeolocation";
import fetchWeatherData from "./fetchWeatherData";
import getWeatherData from "./getWeatherData";
import handleError from "./handleError";

async function handleRequest(location, unit) {

    try {
        const geolocation = await fetchGeolocation(location);

        // fetched geolocation successfully

        const lat = geolocation[0].lat;
        const lon = geolocation[0].lon;

        // try fo fetch weather data

        try {

            // fetched weather data successfully

            const fetchedWeatherData = await fetchWeatherData(lat, lon, unit);
            const weatherData = getWeatherData(fetchedWeatherData, unit, location);
            displayWeatherData(weatherData);
        } catch (error) {

            // request error or invalid response code

            handleError(error);
        }
    } catch (error) {

        // request error or invalid geolocation

        handleError(error);
    }

}

export default handleRequest;