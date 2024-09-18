const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "fccf326630452dea82df3ebe94b16636";

const getWeatherInfo = async () => {

    let inputField = document.getElementById("cityname");
    const cityName = inputField.value;

    const weatherIcon = document.querySelector(".weather-icon");

    const response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);

    if (response.status == 404) {

        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {
        const jsonResponse = await response.json();

        const result = {
            city: cityName,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
            speed: Math.floor(jsonResponse.wind.speed)
        };

        document.querySelector(".city").innerHTML = result.city;
        document.querySelector(".temp").innerHTML = Math.floor(result.temp) + "&deg;C";
        document.querySelector(".humidity").innerHTML = result.humidity + "%";
        document.querySelector(".wind").innerHTML = result.speed + "km/h";

        if (result.weather == "overcast clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (result.weather == "clear sky") {
            weatherIcon.src = "images/clear.png";
        } else if (result.weather == "mist") {
            weatherIcon.src = "images/mist.png";
        } else if (result.weather == "rain") {
            weatherIcon.src = "images/rain.png";
        } else if (result.weather == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (result.weather == "haze") {
            weatherIcon.src = "images/clear.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


};

