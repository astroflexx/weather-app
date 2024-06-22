async function fetchGeolocation(location) {
    const API_KEY = 'f7bf597c02f6ab7d56cdb8f7254810f6';

    try {

        const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`,
        );

        const data = await response.json();

        // response will be an array

        if (data.length > 0) {

            // successfully fetched geolocation

            return data;
        } else {
            throw new Error('Invalid geolocation! Please check location and try again');
        }

    } catch (error) {
        throw error;
    }
}

export default fetchGeolocation;