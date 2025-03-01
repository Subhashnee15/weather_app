// Get the elememts from the DOM
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-btn');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    //our openWeatherMap API key 
    const apikey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

    //function to fetch weather data
    const getWeather = async(city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            if(data.cod === 200) {
                // Updtae the UI with the weather data
                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.amin.temp}°C`;
                description.textContent = `Description:${data.weather[0].description}`;
                humidity.textContent = `Humidity : ${data.main.humidity}%`;
                wind.textContent = ` Wind Speed : ${data.wind.speed}m/s`;
            } else {
                alert("City not found. Please try again.");
            }

        } catch (error) {
            console.error("Errpr fetching weather data: " , error);
        }
    };
    // Add event listener to search button
    searchButton.addEventListener('click', () => {
        const city = cityInput.value;
        if(city) {
            getWeather(city);
        } else {
            alert("Please enter your city name.");
        }
    });
    // Optionally, you can also allow pressing " Enter to search"
    cityInput.addEventListener('keypress',(e) => {
        if (e.key ==='Enter') {
            searchButton.click();
        }
    });
    