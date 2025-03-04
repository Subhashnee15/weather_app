// Get the elememts from the DOM
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-btn');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    //our openWeatherMap API key 
    const apiKey = '28eaf950fe22f1cc56f7de4e38f22db4'; 
// Replace with your OpenWeatherMap API key

    //function to fetch weather data
    const getWeather = async(city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            if(data.cod === 200) {
                // Updtae the UI with the weather data
                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                description.textContent = `Description:${data.weather[0].description}`;
                humidity.textContent = `Humidity : ${data.main.humidity}%`;
                wind.textContent = ` Wind Speed : ${data.wind.speed}m/s`;
            } else {
                alert("City not found. Please try again.");
            }

        } catch (error) {
            console.error("Error fetching weather data: " , error);
        }
    };

    //function to update background image based on weather condition
    const updateBackground = (weatherCondition) => {
        let backgroundImage = '';

        // set background image based on weather condition
        switch(weatherCondition.toLowerCase()) {
            case 'clear':
                backgroundImage = 'url("./images/sunny img.jpeg")';
                break;

                case 'clouds' :
                    backgroundImage  = 'url("./images/cloudy.jpeg")';
                    break;
                    case 'rain' :
                        backgroundImage = 'url("./images/rainy.jpeg")';
                        break;
                        case 'snow': 
                        backgroundImage = 'url("./images/snowy.jpeg")';
                        break;
                        default :
                        backgroundImage = 'url("./images/default.jpg")';
                        break;

        }
        //apply the background iamge to the body
        document.body.style.backgroundImage = backgroundImage;
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
    